import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

function FaceDetectionApp() {
  const videoElementRef = useRef();
  const canvasRef = useRef();
  const [modelsLoaded, setModelsLoaded] = useState(false);

  useEffect(() => {
    const loadModels = async () => {
      try {
        await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
        await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
        console.log("Models loaded successfully");
        setModelsLoaded(true);
      } catch (error) {
        console.error("Failed to load models", error);
      }
    };
    loadModels();
  }, []);

  useEffect(() => {
    if (modelsLoaded) {
      const video = videoElementRef.current;
      video.src = "http://192.168.110.78:22334/video_feed";
      video.oncanplay = () => {
        console.log("Video can play");
      };
      video.onerror = (e) => {
        console.error("Video error", e);
      };
      video.addEventListener('play', handleVideoOnPlay);
    }
  }, [modelsLoaded]);

  const handleVideoOnPlay = () => {
    console.log("Video is playing");
    const video = videoElementRef.current;
    const canvas = canvasRef.current;
    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(canvas, displaySize);
    setInterval(async () => {
      const detections = await faceapi.detectAllFaces(video).withFaceLandmarks();
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    }, 100);
  };

  return (
    <div>
      {modelsLoaded ? null : <p>Loading models...</p>}
      <video ref={videoElementRef} autoPlay muted crossOrigin="anonymous" width="720" height="560" />
      <canvas ref={canvasRef} style={{ position: "absolute" }} />
    </div>
  );
}

export default FaceDetectionApp;
