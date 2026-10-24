import React, { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 198;

export default function ScrollCanvas() {
  const canvasRef = useRef(null);
  const [loadPercent, setLoadPercent] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });

    const images = new Array(FRAME_COUNT);
    let loadedCount = 0;
    let lastRenderedFrame = -1;
    let targetProgress = 0;
    let smoothedProgress = 0;
    let animationFrameId = null;

    const getFrameUrl = (index) =>
      `/me_4k/ezgif-frame-${String(index).padStart(3, '0')}.jpg`;

    function resizeCanvas() {
      const dpr = Math.max(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      if (lastRenderedFrame >= 0) {
        drawFrame(lastRenderedFrame);
      }
    }

    function drawFrame(index) {
      const img = images[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      // Fill mode: covers full screen without black borders
      const scale = Math.max(cw / iw, ch / ih);
      const renderWidth = iw * scale;
      const renderHeight = ih * scale;
      const offsetX = (cw - renderWidth) / 2;
      const offsetY = (ch - renderHeight) / 2;

      ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
      lastRenderedFrame = index;
    }

    // Preload frames with real-time percentage
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameUrl(i + 1);
      img.onload = () => {
        loadedCount++;
        const pct = Math.round((loadedCount / FRAME_COUNT) * 100);
        setLoadPercent(pct);

        if (i === 0 && lastRenderedFrame === -1) {
          resizeCanvas();
          drawFrame(0);
        }
        if (loadedCount >= Math.min(25, FRAME_COUNT)) {
          setIsReady(true);
        }
      };
      images[i] = img;
    }

    function getScrollProgress() {
      const scrollableDistance = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableDistance <= 0) return 0;
      const currentScroll = window.scrollY || document.documentElement.scrollTop || window.pageYOffset || 0;
      return Math.min(Math.max(currentScroll / scrollableDistance, 0), 1);
    }

    function animate() {
      targetProgress = getScrollProgress();
      // 0.08 lerp for smooth momentum
      smoothedProgress += (targetProgress - smoothedProgress) * 0.08;

      const frameIndex = Math.min(
        Math.max(Math.round(smoothedProgress * (FRAME_COUNT - 1)), 0),
        FRAME_COUNT - 1
      );

      if (frameIndex !== lastRenderedFrame) {
        drawFrame(frameIndex);
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* 4K Background Canvas Viewport */}
      <div id="viewport" aria-hidden="true">
        <canvas ref={canvasRef} id="anim-canvas" />
      </div>

      {/* Cinematic Black Tint Overlay */}
      <div id="tint-overlay" aria-hidden="true" />

      {/* Initial High-Res Asset Loader */}
      <div className={`canvas-preloader ${isReady ? 'hidden' : ''}`} aria-hidden="true">
        <div className="preloader-inner">
          <div className="preloader-spinner"></div>
          <div className="preloader-text">Loading 4K Visual Engine ({loadPercent}%)</div>
        </div>
      </div>
    </>
  );
}
