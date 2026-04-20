
var borderColor;
var barColor;
let nIntervId;

const lengthProj = projectList.length;



//JQUERY
$(document).ready(function() {
  
	// Fade in Scroll
	window.setTimeout(() => {
    $('.fadeInScroll').fadeInScroll()
  }, 300);;
});

const elements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  const viewportHeight = window.innerHeight;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();

    // progress
    const progress = 1.25 - (rect.top / viewportHeight);
    const clamped = Math.min(Math.max(progress, 0), 1);

    // dataset checks
    const hasX = el.dataset.xStart !== undefined || el.dataset.xEnd !== undefined;
    const hasY = el.dataset.yStart !== undefined || el.dataset.yEnd !== undefined;

    let transformParts = [];

    if (hasX) {
      const xStart = parseFloat(el.dataset.xStart) || 0;
      const xEnd = parseFloat(el.dataset.xEnd) || 0;
      const currentX = xStart + (xEnd - xStart) * clamped;
      transformParts.push(`translateX(${currentX}px)`);
    }

    if (hasY) {
      const yStart = parseFloat(el.dataset.yStart) || 0;
      const yEnd = parseFloat(el.dataset.yEnd) || 0;
      const currentY = yStart + (yEnd - yStart) * clamped;
      transformParts.push(`translateY(${currentY}px)`);
    }

    // apply styles
    el.style.opacity = clamped;

    // only apply transform if needed
    if (transformParts.length) {
      el.style.transform = transformParts.join(' ');
    }
  });
});