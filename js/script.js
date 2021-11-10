// Light ON \ OFF

if (!localStorage.theme) localStorage.theme = "light";
document.body.className = localStorage.theme;

toggleThemeBtn.onclick = () => {
   document.body.classList.toggle("dark");
   localStorage.theme = document.body.className || "light";
}

// Symbol Slider

// let offset = 0;
// const sliderLine = document.querySelector('.slider-line');

// sliderNext.onclick = () => { offset = (offset >= 750) ? 0 : offset += 250; sliderLine.style.left = -offset + 'px'; };

// sliderPrev.onclick = () => { offset = (offset <= 0) ? 750 : offset -= 250; sliderLine.style.left = -offset + 'px'; };
