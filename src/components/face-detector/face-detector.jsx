import React, { useEffect, useState, useRef, useCallback } from "react";
import * as faceapi from "face-api.js";

const styles = {
  canvas: {
    position: "absolute",
    top: 0,
    left: 0,
    filter: "drop-shadow(0 0 10px cyan)",
  },
};

function FaceDetector({ camera }) {
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [isImageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);
  const canvasRef = useRef(null);

  const [scanLinePos, setScanLinePos] = useState(0);
  const [scanLineDir, setScanLineDir] = useState(1);
  const [scanLinePosH, setScanLinePosH] = useState(0);
  const [scanLineDirH, setScanLineDirH] = useState(1);

  const onImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const loadModels = useCallback(async () => {
    try {
      await Promise.allSettled([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      ]);
      setModelsLoaded(true);
    } catch (error) {
      console.error("Error loading models:", error);
    }
  }, []);

  const recognizeFaces = useCallback(async () => {
    if (!isImageLoaded) {
      return;
    }
    const image = imageRef.current;
    const detections = await faceapi
      .detectAllFaces(image, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptors();

    const canvas = canvasRef.current || faceapi.createCanvasFromMedia(image);
    canvas.width = image.width;
    canvas.height = image.height;
    canvasRef.current = canvas;

    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    const resizedDetections = faceapi.resizeResults(detections, image);

    resizedDetections.forEach((detection) => {
      if (detection && detection.detection && detection.detection.box) {
        const { box } = detection.detection;
        context.strokeStyle = "#4ac5ff";
        context.lineWidth = 6;
        context.strokeRect(box.x, box.y, box.width, box.height);

        context.strokeStyle = "#4ac5ff";
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(box.x, box.y + scanLinePos);
        context.lineTo(box.x + box.width, box.y + scanLinePos);
        context.stroke();

        context.beginPath();
        context.moveTo(box.x + scanLinePosH, box.y);
        context.lineTo(box.x + scanLinePosH, box.y + box.height);
        context.stroke();

        setScanLinePos((prevPos) => {
          let newPos = prevPos + scanLineDir * 15;
          if (newPos > box.height) {
            setScanLineDir(-1);
            newPos = box.height;
          } else if (newPos < 0) {
            setScanLineDir(1);
            newPos = 0;
          }
          return newPos;
        });

        setScanLinePosH((prevPos) => {
          let newPos = prevPos + scanLineDirH * 5;
          if (newPos > box.width) {
            setScanLineDirH(-1);
            newPos = box.width;
          } else if (newPos < 0) {
            setScanLineDirH(1);
            newPos = 0;
          }
          return newPos;
        });
      }
    });
  }, [scanLinePos, scanLineDir, scanLinePosH, scanLineDirH, isImageLoaded]);

  useEffect(() => {
    loadModels();
  }, [loadModels]);

  useEffect(() => {
    if (modelsLoaded) {
      const interval = setInterval(() => {
        recognizeFaces();
      }, 5);
      return () => clearInterval(interval);
    }
  }, [modelsLoaded, recognizeFaces]);

  return (
    <>
      <img
        src={camera ? camera.address : ""}
        crossOrigin="anonymous"
        alt={camera ? camera.address : ""}
        ref={imageRef}
        width="764"
        height="574"
        onLoad={onImageLoad}
      />
      <canvas ref={canvasRef} style={styles.canvas} />
    </>
  );
}

export default FaceDetector;
