// section 1
const start = () => {
  const tri = document.querySelector('.section1 > .triangle');
  const square = document.querySelector('.section1 > .square');
  const circle = document.querySelector('.section1 > .circle');
  const section1 = document.querySelector('.section1');
  section1.style.display = 'flex';
  tri.classList.add('tri-rotate');
  square.classList.add('square-rotate');
  circle.classList.add('circle-scale');

  setTimeout(() => {
    square.classList.add('square-scale-out');
    circle.classList.add('circle-scale-out');
    tri.classList.add('tri-scale-out');
    document.querySelector('.section1 > .title').classList.add('section1-fadeout');

    setTimeout(() => {
      startEnd();
    }, 1500);
  }, 4000);
}

const startEnd = () => {
  document.querySelector('.section1').style.display = "none";
  document.querySelector('.section2').style.display = "flex";
  startSectionTwo();
}

// section 2
const startSectionTwo = () => {
  const tri = document.querySelector('.section2 > .side > .triangle');
  const square = document.querySelector('.section2 > .side > .square');
  const circle = document.querySelector('.section2 > .side > .circle');
  const main = document.querySelector('.section2 > .main');
  const side = document.querySelector('.section2 > .side');
  main.classList.add('sec2-main-fadein');
  side.classList.add('sec2-side-slidein');
  tri.classList.add('sec2-tri-sildein');
  circle.classList.add('sec2-circle-sildein');
  square.classList.add('sec2-square-sildein');

  setTimeout(() => {
    square.classList.add('sec2-square-rotate');
    circle.classList.add('sec2-circle-scale');
    tri.classList.add('sec2-tri-rotate');
  }, 2000);
}

const secTwoBtn = document.querySelector('.section2 > .main > .content');
secTwoBtn.addEventListener('click', el => {
  if (el.target.nodeName === 'BUTTON') {
    const tri = document.querySelector('.section2 > .side > .triangle');
    const square = document.querySelector('.section2 > .side > .square');
    const circle = document.querySelector('.section2 > .side > .circle');
    const main = document.querySelector('.section2 > .main');
    const side = document.querySelector('.section2 > .side');
    const content = document.querySelector('.section2 > .main > .content');
    tri.style.display = "none";
    square.style.display = "none";
    circle.style.display = "none";
    content.style.display = "none";
    main.style.width = "0%";
    side.style.width = "100%";

    setTimeout(() => {
      sectionTwoEnd();
    }, 600);
  }
})

const sectionTwoEnd = () => {
  document.querySelector('.section2').style.display = "none";
  document.querySelector('.section3').style.display = "flex";

  setTimeout(() => {
    startSectionThree();
  }, 100);
}

// section 3
const startSectionThree = () => {
  const main = document.querySelector('.section3 > .main');
  const side = document.querySelector('.section3 > .side');
  const content = document.querySelector('.section3 > .main > .content');
  const tri = document.querySelector('.section3 > .side > .triangle');
  const square = document.querySelector('.section3 > .side > .square');
  const circle = document.querySelector('.section3 > .side > .circle');
  main.style.width = "622px";
  side.style.width = "402px";
  tri.classList.add('sec3-tri-sildein');
  circle.classList.add('sec3-circle-sildein');
  square.classList.add('sec3-square-sildein');

  setTimeout(() => {
    content.style.opacity = "1";
  }, 500);

  setTimeout(() => {
    square.classList.add('sec3-square-rotate');
    circle.classList.add('sec3-circle-scale');
    tri.classList.add('sec3-tri-rotate');
  }, 2000);
}

const secThreeBtn = document.querySelector('.section3 > .main > .content');
secThreeBtn.addEventListener('click', el => {
  if (el.target.nodeName === 'BUTTON') {
    const tri = document.querySelector('.section3 > .side > .triangle');
    const square = document.querySelector('.section3 > .side > .square');
    const circle = document.querySelector('.section3 > .side > .circle');
    const main = document.querySelector('.section3 > .main');
    const side = document.querySelector('.section3 > .side');
    const content = document.querySelector('.section3 > .main > .content');
    tri.style.display = "none";
    square.style.display = "none";
    circle.style.display = "none";
    content.style.display = "none";
    main.style.width = "0%";
    side.style.width = "100%";

    setTimeout(() => {
      sectionThreeEnd();
    }, 600);
  }
})

const sectionThreeEnd = () => {
  document.querySelector('.section3').style.display = "none";
  document.querySelector('.section4').style.display = "flex";

  setTimeout(() => {
    startSectionFour();
  }, 100);
}

// section 4
const startSectionFour = () => {
  const main = document.querySelector('.section4 > .main');
  const side = document.querySelector('.section4 > .side');
  const content = document.querySelector('.section4 > .main > .content');
  const tri = document.querySelector('.section4 > .side > .triangle');
  const square = document.querySelector('.section4 > .side > .square');
  const circle = document.querySelector('.section4 > .side > .circle');
  main.style.width = "622px";
  side.style.width = "402px";
  tri.classList.add('sec4-tri-sildein');
  circle.classList.add('sec4-circle-sildein');
  square.classList.add('sec4-square-sildein');

  setTimeout(() => {
    content.style.opacity = "1";
  }, 500);

  setTimeout(() => {
    square.classList.add('sec4-square-rotate');
    circle.classList.add('sec4-circle-scale');
    tri.classList.add('sec4-tri-rotate');
  }, 2000);
}

const secFourBtn = document.querySelector('.section4 > .main > .content');
secFourBtn.addEventListener('click', el => {
  if (el.target.nodeName === 'BUTTON') {
    const tri = document.querySelector('.section4 > .side > .triangle');
    const square = document.querySelector('.section4 > .side > .square');
    const circle = document.querySelector('.section4 > .side > .circle');
    const main = document.querySelector('.section4 > .main');
    const side = document.querySelector('.section4 > .side');
    const content = document.querySelector('.section4 > .main > .content');
    tri.style.display = "none";
    square.style.display = "none";
    circle.style.display = "none";
    content.style.display = "none";
    main.style.width = "0%";
    side.style.width = "100%";

    setTimeout(() => {
      sectionFourEnd();
    }, 600);
  }
})

const sectionFourEnd = () => {
  document.querySelector('.section4').style.display = "none";
  document.querySelector('.calculating-1').style.display = "flex";

  setTimeout(() => {
    document.querySelector('.calculating-1 > .content').style.opacity = "1";
  }, 100);

  setTimeout(() => {
    startSectionFive();
  }, 3000)
}

// section 5
const startSectionFive = () => {
  document.querySelector('.calculating-1').style.display = "none";
  document.querySelector('.calculating-2').style.display = "flex";

  setTimeout(() => {
    document.querySelector('.calculating-2 > .content').style.opacity = "1";
  }, 100);

  setTimeout(() => {
    startSectionSix();
  }, 3300)
}

// section 6
const startSectionSix = () => {
  document.querySelector('.calculating-2').style.display = "none";
  document.querySelector('.calculating-3').style.display = "flex";

  setTimeout(() => {
    document.querySelector('.calculating-3 > .content').style.opacity = "1";
  }, 100);

  setTimeout(() => {
    startSectionSeven();
  }, 3500)
}

// section 7
const startSectionSeven = () => {
  document.querySelector('.calculating-3').style.display = "none";

  setTimeout(() => {
    document.querySelector('.result-triangle').style.display = "flex";

    setTimeout(() => {
      document.querySelector('.result-triangle').style.opacity = "1";
      const triOne = document.querySelector('.result-triangle > .triangle-1');
      const triTwo = document.querySelector('.result-triangle > .triangle-2');
      const triThree = document.querySelector('.result-triangle > .triangle-3');
      triOne.classList.add('result-tri-slidein');
      triTwo.classList.add('result-tri-2-slidein');
      triThree.classList.add('result-tri-slidein');

      const bgTri1 = document.querySelector('.result-triangle > .bg-triangle > .tri-1');
      const bgTri2 = document.querySelector('.result-triangle > .bg-triangle > .tri-2');
      const bgTri3 = document.querySelector('.result-triangle > .bg-triangle > .tri-3');
      const bgTri4 = document.querySelector('.result-triangle > .bg-triangle > .tri-4');
      const bgTri5 = document.querySelector('.result-triangle > .bg-triangle > .tri-5');
      const bgTri6 = document.querySelector('.result-triangle > .bg-triangle > .tri-6');
      const bgTri7 = document.querySelector('.result-triangle > .bg-triangle > .tri-7');
      bgTri1.classList.add('result-bg-tri-sildein');
      bgTri2.classList.add('result-bg-tri-sildein-3');
      bgTri3.classList.add('result-bg-tri-sildein-2');
      bgTri4.classList.add('result-bg-tri-sildein-2');
      bgTri5.classList.add('result-bg-tri-sildein');
      bgTri6.classList.add('result-bg-tri-sildein-3');
      bgTri7.classList.add('result-bg-tri-sildein');

        setTimeout(() => {
          document.querySelector('.result-triangle > .content').style.opacity = "1";

          setTimeout(() => {
            startSectionEight();
          }, 8000);
        }, 1000);
    }, 100);
  }, 1000);
}

const startSectionEight = () => {
  const content = document.querySelector('.result-triangle > .content');
  content.classList.add('result-tri-content');

  const triOne = document.querySelector('.result-triangle > .triangle-1');
  const triTwo = document.querySelector('.result-triangle > .triangle-2');
  const triThree = document.querySelector('.result-triangle > .triangle-3');
  triOne.classList.add('result-tri-movement');
  triTwo.classList.add('result-tri-movement-light');
  triThree.classList.add('result-tri-movement-dark');

  const bgTri1 = document.querySelector('.result-triangle > .bg-triangle > .tri-1');
  const bgTri2 = document.querySelector('.result-triangle > .bg-triangle > .tri-2');
  const bgTri3 = document.querySelector('.result-triangle > .bg-triangle > .tri-3');
  const bgTri4 = document.querySelector('.result-triangle > .bg-triangle > .tri-4');
  const bgTri5 = document.querySelector('.result-triangle > .bg-triangle > .tri-5');
  const bgTri6 = document.querySelector('.result-triangle > .bg-triangle > .tri-6');
  const bgTri7 = document.querySelector('.result-triangle > .bg-triangle > .tri-7');
  bgTri1.classList.add('result-bg-tri-moveout');
  bgTri2.classList.add('result-bg-tri-moveout');
  bgTri3.classList.add('result-bg-tri-movement');
  bgTri4.classList.add('result-bg-tri-movement-2');
  bgTri5.classList.add('result-bg-tri-movement-3');
  bgTri6.classList.add('result-bg-tri-moveout');
  bgTri7.classList.add('result-bg-tri-moveout');

  setTimeout(() => {
    document.querySelector('.result-triangle > .content > .inner').style.opacity = "1";
  }, 2000)
}

const reloadBtn = document.querySelector('.reload');
reloadBtn.addEventListener('click', el => {
  window.location.reload();
})

start();