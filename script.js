const frameCount = 198;
const canvas = document.getElementById('anim-canvas');
const ctx = canvas.getContext('2d', { alpha: false });

// Load True 4K UHD+ frames (3904 x 2848)
const getFrameUrl = (index) =>
  `me_4k/ezgif-frame-${String(index).padStart(3, '0')}.jpg`;

const images = new Array(frameCount);
let lastRenderedFrame = -1;
let targetProgress = 0;
let smoothedProgress = 0;

// Resize canvas buffer for full 4K and native High-DPI Retina fidelity
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

window.addEventListener('resize', resizeCanvas);

// Draw image using fill function (fills entire screen/canvas without letterboxing)
function drawFrame(index) {
  const img = images[index];
  if (!img || !img.complete || img.naturalWidth === 0) return;

  const cw = canvas.width;
  const ch = canvas.height;
  const iw = img.naturalWidth;
  const ih = img.naturalHeight;

  // Fill calculation (Math.max ensures the image completely covers the canvas)
  const scale = Math.max(cw / iw, ch / ih);
  const renderWidth = iw * scale;
  const renderHeight = ih * scale;
  const offsetX = (cw - renderWidth) / 2;
  const offsetY = (ch - renderHeight) / 2;

  ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  lastRenderedFrame = index;
}

// Preload all 198 4K image frames
function preloadFrames() {
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = getFrameUrl(i + 1);
    img.onload = () => {
      if (i === 0 && lastRenderedFrame === -1) {
        resizeCanvas();
        drawFrame(0);
      }
    };
    images[i] = img;
  }
}

preloadFrames();

// Calculate scroll progress between 0 and 1 across the full portfolio document
function getScrollProgress() {
  const scrollableDistance = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollableDistance <= 0) return 0;
  const currentScroll = window.scrollY || document.documentElement.scrollTop || window.pageYOffset || 0;
  return Math.min(Math.max(currentScroll / scrollableDistance, 0), 1);
}

// Smooth requestAnimationFrame animation loop with linear interpolation (lerp)
function animate() {
  targetProgress = getScrollProgress();
  // 0.08 lerp factor creates silky cinematic momentum
  smoothedProgress += (targetProgress - smoothedProgress) * 0.08;

  const frameIndex = Math.min(
    Math.max(Math.round(smoothedProgress * (frameCount - 1)), 0),
    frameCount - 1
  );

  if (frameIndex !== lastRenderedFrame) {
    drawFrame(frameIndex);
  }

  requestAnimationFrame(animate);
}

resizeCanvas();
requestAnimationFrame(animate);

// Header background transition on scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('site-header');
  if (header) {
    if (window.scrollY > 40) {
      header.style.background = 'rgba(4, 4, 7, 0.85)';
      header.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
    } else {
      header.style.background = 'rgba(4, 4, 7, 0.55)';
      header.style.borderBottomColor = 'rgba(255, 255, 255, 0.05)';
    }
  }
}, { passive: true });

// Copy email to clipboard utility with feedback
function copyEmail() {
  const email = "krishnanegi0906@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    const copyText = document.getElementById('copyText');
    const copyBtn = document.getElementById('copyBtn');
    if (copyText) {
      copyText.textContent = "Copied! ✓";
      copyBtn.style.background = "#10b981";
      copyBtn.style.borderColor = "#10b981";
      setTimeout(() => {
        copyText.textContent = "Copy Email";
        copyBtn.style.background = "";
        copyBtn.style.borderColor = "";
      }, 2000);
    }
  }).catch(() => {
    window.location.href = `mailto:${email}`;
  });
}
window.copyEmail = copyEmail;
