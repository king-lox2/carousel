const loader = document.querySelector('.loader');
const prev = document.querySelector('.prevBtn');
const next = document.querySelector('.nextBtn');
const slideDiv = document.querySelectorAll('.slide-div');

window.addEventListener("load", () => {
 setTimeout(function() {
   loader.classList.add('stopLoad');
 }, 2000); 
});


slideDiv.forEach((slide,index) => {
  slide.style.left = `${index * 100}%`;
});


let count = 0;

prev.addEventListener("click",() => {
  count--;
  slideCount();
});

next.addEventListener("click",() => {
  count++;
  slideCount();
});


const slideCount = () => {
  
  if (count === slideDiv.length -1) {
    next.style.display = 'none';
  } else {
    next.style.display = 'block';
  }
  
  if (count > 0) {
    prev.style.display = 'block';
  } else {
    prev.style.display = 'none';
  }
 
 
 /*if (count === slideDiv.length) {
    count = 0;
  }
  
  if (count < 0) {
    count = slideDiv.length - 1 ;
  }*/
 
  slideDiv.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
};

prev.style.display = 'none';

