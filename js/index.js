
var borderColor;
var barColor;
let nIntervId;

const lengthProj = projectList.length;



//JQUERY
$(document).ready(function() {
});

const elements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  const viewportHeight = window.innerHeight;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();

    // progress: 0 (below viewport) → 1 (fully passed)
    const progress = 1 - (rect.top / viewportHeight);

    // clamp between 0 and 1
    const clamped = Math.min(Math.max(progress, 0), 1);

    // apply animation
    el.style.opacity = clamped;
    if (el.classList.contains('left')) {
        el.style.transform = `translateX(${(1 - clamped) * 300}px)`;

    } else if (el.classList.contains('right')) {
        el.style.transform = `translateX(${(1 + clamped) * 300}px)`;

    }
  });
});