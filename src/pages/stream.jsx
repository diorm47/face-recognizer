import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

const FaceDetection = ({ imageUrl }) => {
  const imgRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
      await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
      
    };

    const detectFaces = async () => {
      const detections = await faceapi.detectAllFaces(
        imgRef.current,
        new faceapi.TinyFaceDetectorOptions()
      );
      const resizedDetections = faceapi.resizeResults(detections, {
        width: imgRef.current.width,
        height: imgRef.current.height,
      });
      canvasRef.current
        .getContext("2d")
        .clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
    };

    loadModels().then(detectFaces);
  }, [imageUrl]); // Re-run effect when imageUrl changes

  return (
    <div>
      <img
        ref={imgRef}
        src="http://192.168.110.78:22334/stream"
        crossOrigin="anonymous"
        width="720"
        height="560"
        alt=""
      />
      <canvas ref={canvasRef} width="720" height="560" />
    </div>
  );
};

export default FaceDetection;
