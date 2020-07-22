const $slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextSlide() {
  console.log($slides);
  const currentSlide = $slides[currentIndex];
  // const currentSlide = $slides[currentIndex];
  // gsap.to('.menu', { background: '#c9a578', delay: 1 });
  // gsap.to('.slide__sub-title', { color: '#c9a578', delay: 1 });

  // console.log(currentIndex);

  // gsap.to(currentSlide.querySelector('.slide__caption'), {
  //   scale: 70,
  //   duration: 2,
  //   autoAlpha: 0,
  //   ease: 'power4.in',
  // });

  // gsap.to(currentSlide, {
  //   duration: 2,
  //   autoAlpha: 0,
  //   ease: 'power4.in',
  // });

  gsap.to($slides[currentIndex], {
    duration: 2,
    autoAlpha: 0,
    ease: 'power4.in',
  });

  gsap.to($slides[currentIndex + 1], {
    duration: 2,
    autoAlpha: 1,
    ease: 'power4.in',
  });

  // currentIndex++;

  // if (currentIndex === $slides.length - 1) {
  //   gsap.to($slides[0], {
  //     autoAlpha: 1,
  //     delay: 2,
  //     duration: 1,
  //   });
  //   currentIndex = 0;
  // } else {
  //   gsap.to($slides[currentIndex + 1], {
  //     autoAlpha: 1,
  //     delay: 2,
  //     duration: 1,
  //   });
  //   currentIndex++;
  // }
}

//   setInterval(() => nextSlide(), 3000);
setTimeout(() => nextSlide(), 3000);
//   setTimeout(() => nextSlide(), 8000);

const tl = gsap.timeline();

tl.to('.slider-pagination__item:first-child img', {
  x: -11,
  y: -44,
  duration: 0.4,
  ease: 'power2.out',
});

tl.from('.slider-pagination__item:first-child .slide-pagination__loader', {
  autoAlpha: 0,
});

tl.to('.slider-pagination__item:first-child .slide-pagination__loader', {
  scaleX: 1,
  duration: 2,
  ease: 'power2.in',
});

tl.to('.slider-pagination__item:first-child img', {
  x: 0,
  y: 0,
  duration: 0.4,
  delay: 1,
  ease: 'power2.out',
  boxShadow: '0 9px 24px 0 rgba(0,0,0,0.30)',
});

tl.to('.slider-pagination__item:first-child .slide-pagination__loader', {
  autoAlpha: 0,
  delay: -0.4,
  duration: 0.1,
});

tl.to('.slider-pagination__item', {
  x: -141,
  stagger: 0.1,
  duration: 0.4,
  ease: 'power2.out',
});

//
tl.to('.slider-pagination__item:nth-child(2) img', {
  x: -11,
  y: -44,
  duration: 0.4,
  ease: 'power2.out',
});

tl.to('.slider-pagination__item:nth-child(2) .slide-pagination__loader', {
  scaleX: 1,
  duration: 2,
  ease: 'power2.in',
});

tl.to('.slider-pagination__item:nth-child(2) img', {
  x: 0,
  y: 0,
  duration: 0.4,
  delay: 1,
  ease: 'power2.out',
  boxShadow: '0 9px 24px 0 rgba(0,0,0,0.30)',
});

tl.to('.slider-pagination__item:nth-child(2) .slide-pagination__loader', {
  autoAlpha: 0,
  delay: -0.4,
  duration: 0.1,
});

tl.to('.slider-pagination__item', {
  x: -282,
  stagger: 0.1,
  duration: 0.4,
  ease: 'power2.out',
});

tl.to('.slider-pagination__item:nth-child(3) img', {
  x: -11,
  y: -44,
  duration: 0.4,
  ease: 'power2.out',
});
