// function detailAnimation() {
//   const $slides = document.querySelectorAll('.slide');
//   let currentIndex = 0;

//   function nextSlide() {
//     const currentSlide = $slides[currentIndex];
//     // gsap.to('.menu', { background: '#c9a578', delay: 1 });
//     // gsap.to('.slide__sub-title', { color: '#c9a578', delay: 1 });

//     // console.log(currentIndex);

//     // gsap.to(currentSlide.querySelector('.slide__caption'), {
//     //   scale: 70,
//     //   duration: 2,
//     //   autoAlpha: 0,
//     //   ease: 'power4.in',
//     // });

//     // gsap.to(currentSlide.querySelector('.slide__img'), {
//     //   scale: 4,
//     //   duration: 2,
//     //   autoAlpha: 0,
//     //   ease: 'power4.in',
//     // });

//     if (currentIndex === $slides.length - 1) {
//       gsap.to($slides[0], {
//         autoAlpha: 1,
//         delay: 2,
//         duration: 1,
//       });
//       currentIndex = 0;
//     } else {
//       gsap.to($slides[currentIndex + 1], {
//         autoAlpha: 1,
//         delay: 2,
//         duration: 1,
//       });
//       currentIndex++;
//     }
//   }

//   setTimeout(() => nextSlide(), 3000);
//   setTimeout(() => nextSlide(), 8000);
// }

// detailAnimation();
