"use strict";

// section 1
var start = function start() {
  var tri = document.querySelector('.section1 > .triangle');
  var square = document.querySelector('.section1 > .square');
  var circle = document.querySelector('.section1 > .circle');
  var section1 = document.querySelector('.section1');
  section1.style.display = 'flex';
  tri.classList.add('tri-rotate');
  square.classList.add('square-rotate');
  circle.classList.add('circle-scale');
  setTimeout(function () {
    square.classList.add('square-scale-out');
    circle.classList.add('circle-scale-out');
    tri.classList.add('tri-scale-out');
    document.querySelector('.section1 > .title').classList.add('section1-fadeout');
    setTimeout(function () {
      startEnd();
    }, 1500);
  }, 4000);
};

var startEnd = function startEnd() {
  document.querySelector('.section1').style.display = "none";
  document.querySelector('.section2').style.display = "flex";
  startSectionTwo();
}; // section 2


var startSectionTwo = function startSectionTwo() {
  var tri = document.querySelector('.section2 > .side > .triangle');
  var square = document.querySelector('.section2 > .side > .square');
  var circle = document.querySelector('.section2 > .side > .circle');
  var main = document.querySelector('.section2 > .main');
  var side = document.querySelector('.section2 > .side');
  main.classList.add('sec2-main-fadein');
  side.classList.add('sec2-side-slidein');
  tri.classList.add('sec2-tri-sildein');
  circle.classList.add('sec2-circle-sildein');
  square.classList.add('sec2-square-sildein');
  setTimeout(function () {
    square.classList.add('sec2-square-rotate');
    circle.classList.add('sec2-circle-scale');
    tri.classList.add('sec2-tri-rotate');
  }, 2000);
};

var secTwoBtn = document.querySelector('.section2 > .main > .content');
secTwoBtn.addEventListener('click', function (el) {
  if (el.target.nodeName === 'BUTTON') {
    var tri = document.querySelector('.section2 > .side > .triangle');
    var square = document.querySelector('.section2 > .side > .square');
    var circle = document.querySelector('.section2 > .side > .circle');
    var main = document.querySelector('.section2 > .main');
    var side = document.querySelector('.section2 > .side');
    var content = document.querySelector('.section2 > .main > .content');
    tri.style.display = "none";
    square.style.display = "none";
    circle.style.display = "none";
    content.style.display = "none";
    main.style.width = "0%";
    side.style.width = "100%";
    setTimeout(function () {
      sectionTwoEnd();
    }, 600);
  }
});

var sectionTwoEnd = function sectionTwoEnd() {
  document.querySelector('.section2').style.display = "none";
  document.querySelector('.section3').style.display = "flex";
  setTimeout(function () {
    startSectionThree();
  }, 100);
}; // section 3


var startSectionThree = function startSectionThree() {
  var main = document.querySelector('.section3 > .main');
  var side = document.querySelector('.section3 > .side');
  var content = document.querySelector('.section3 > .main > .content');
  var tri = document.querySelector('.section3 > .side > .triangle');
  var square = document.querySelector('.section3 > .side > .square');
  var circle = document.querySelector('.section3 > .side > .circle');
  main.style.width = "622px";
  side.style.width = "402px";
  tri.classList.add('sec3-tri-sildein');
  circle.classList.add('sec3-circle-sildein');
  square.classList.add('sec3-square-sildein');
  setTimeout(function () {
    content.style.opacity = "1";
  }, 500);
  setTimeout(function () {
    square.classList.add('sec3-square-rotate');
    circle.classList.add('sec3-circle-scale');
    tri.classList.add('sec3-tri-rotate');
  }, 2000);
};

var secThreeBtn = document.querySelector('.section3 > .main > .content');
secThreeBtn.addEventListener('click', function (el) {
  if (el.target.nodeName === 'BUTTON') {
    var tri = document.querySelector('.section3 > .side > .triangle');
    var square = document.querySelector('.section3 > .side > .square');
    var circle = document.querySelector('.section3 > .side > .circle');
    var main = document.querySelector('.section3 > .main');
    var side = document.querySelector('.section3 > .side');
    var content = document.querySelector('.section3 > .main > .content');
    tri.style.display = "none";
    square.style.display = "none";
    circle.style.display = "none";
    content.style.display = "none";
    main.style.width = "0%";
    side.style.width = "100%";
    setTimeout(function () {
      sectionThreeEnd();
    }, 600);
  }
});

var sectionThreeEnd = function sectionThreeEnd() {
  document.querySelector('.section3').style.display = "none";
  document.querySelector('.section4').style.display = "flex";
  setTimeout(function () {
    startSectionFour();
  }, 100);
}; // section 4


var startSectionFour = function startSectionFour() {
  var main = document.querySelector('.section4 > .main');
  var side = document.querySelector('.section4 > .side');
  var content = document.querySelector('.section4 > .main > .content');
  var tri = document.querySelector('.section4 > .side > .triangle');
  var square = document.querySelector('.section4 > .side > .square');
  var circle = document.querySelector('.section4 > .side > .circle');
  main.style.width = "622px";
  side.style.width = "402px";
  tri.classList.add('sec4-tri-sildein');
  circle.classList.add('sec4-circle-sildein');
  square.classList.add('sec4-square-sildein');
  setTimeout(function () {
    content.style.opacity = "1";
  }, 500);
  setTimeout(function () {
    square.classList.add('sec4-square-rotate');
    circle.classList.add('sec4-circle-scale');
    tri.classList.add('sec4-tri-rotate');
  }, 2000);
};

var secFourBtn = document.querySelector('.section4 > .main > .content');
secFourBtn.addEventListener('click', function (el) {
  if (el.target.nodeName === 'BUTTON') {
    var tri = document.querySelector('.section4 > .side > .triangle');
    var square = document.querySelector('.section4 > .side > .square');
    var circle = document.querySelector('.section4 > .side > .circle');
    var main = document.querySelector('.section4 > .main');
    var side = document.querySelector('.section4 > .side');
    var content = document.querySelector('.section4 > .main > .content');
    tri.style.display = "none";
    square.style.display = "none";
    circle.style.display = "none";
    content.style.display = "none";
    main.style.width = "0%";
    side.style.width = "100%";
    setTimeout(function () {
      sectionFourEnd();
    }, 600);
  }
});

var sectionFourEnd = function sectionFourEnd() {
  document.querySelector('.section4').style.display = "none";
  document.querySelector('.calculating-1').style.display = "flex";
  setTimeout(function () {
    document.querySelector('.calculating-1 > .content').style.opacity = "1";
  }, 100);
  setTimeout(function () {
    startSectionFive();
  }, 3000);
}; // section 5


var startSectionFive = function startSectionFive() {
  document.querySelector('.calculating-1').style.display = "none";
  document.querySelector('.calculating-2').style.display = "flex";
  setTimeout(function () {
    document.querySelector('.calculating-2 > .content').style.opacity = "1";
  }, 100);
  setTimeout(function () {
    startSectionSix();
  }, 3300);
}; // section 6


var startSectionSix = function startSectionSix() {
  document.querySelector('.calculating-2').style.display = "none";
  document.querySelector('.calculating-3').style.display = "flex";
  setTimeout(function () {
    document.querySelector('.calculating-3 > .content').style.opacity = "1";
  }, 100);
  setTimeout(function () {
    startSectionSeven();
  }, 3500);
}; // section 7


var startSectionSeven = function startSectionSeven() {
  document.querySelector('.calculating-3').style.display = "none";
  setTimeout(function () {
    document.querySelector('.result-triangle').style.display = "flex";
    setTimeout(function () {
      document.querySelector('.result-triangle').style.opacity = "1";
      var triOne = document.querySelector('.result-triangle > .triangle-1');
      var triTwo = document.querySelector('.result-triangle > .triangle-2');
      var triThree = document.querySelector('.result-triangle > .triangle-3');
      triOne.classList.add('result-tri-slidein');
      triTwo.classList.add('result-tri-2-slidein');
      triThree.classList.add('result-tri-slidein');
      var bgTri1 = document.querySelector('.result-triangle > .bg-triangle > .tri-1');
      var bgTri2 = document.querySelector('.result-triangle > .bg-triangle > .tri-2');
      var bgTri3 = document.querySelector('.result-triangle > .bg-triangle > .tri-3');
      var bgTri4 = document.querySelector('.result-triangle > .bg-triangle > .tri-4');
      var bgTri5 = document.querySelector('.result-triangle > .bg-triangle > .tri-5');
      var bgTri6 = document.querySelector('.result-triangle > .bg-triangle > .tri-6');
      var bgTri7 = document.querySelector('.result-triangle > .bg-triangle > .tri-7');
      bgTri1.classList.add('result-bg-tri-sildein');
      bgTri2.classList.add('result-bg-tri-sildein-3');
      bgTri3.classList.add('result-bg-tri-sildein-2');
      bgTri4.classList.add('result-bg-tri-sildein-2');
      bgTri5.classList.add('result-bg-tri-sildein');
      bgTri6.classList.add('result-bg-tri-sildein-3');
      bgTri7.classList.add('result-bg-tri-sildein');
      setTimeout(function () {
        document.querySelector('.result-triangle > .content').style.opacity = "1";
        setTimeout(function () {
          startSectionEight();
        }, 8000);
      }, 1000);
    }, 100);
  }, 1000);
};

var startSectionEight = function startSectionEight() {
  var content = document.querySelector('.result-triangle > .content');
  content.classList.add('result-tri-content');
  var triOne = document.querySelector('.result-triangle > .triangle-1');
  var triTwo = document.querySelector('.result-triangle > .triangle-2');
  var triThree = document.querySelector('.result-triangle > .triangle-3');
  triOne.classList.add('result-tri-movement');
  triTwo.classList.add('result-tri-movement-light');
  triThree.classList.add('result-tri-movement-dark');
  var bgTri1 = document.querySelector('.result-triangle > .bg-triangle > .tri-1');
  var bgTri2 = document.querySelector('.result-triangle > .bg-triangle > .tri-2');
  var bgTri3 = document.querySelector('.result-triangle > .bg-triangle > .tri-3');
  var bgTri4 = document.querySelector('.result-triangle > .bg-triangle > .tri-4');
  var bgTri5 = document.querySelector('.result-triangle > .bg-triangle > .tri-5');
  var bgTri6 = document.querySelector('.result-triangle > .bg-triangle > .tri-6');
  var bgTri7 = document.querySelector('.result-triangle > .bg-triangle > .tri-7');
  bgTri1.classList.add('result-bg-tri-moveout');
  bgTri2.classList.add('result-bg-tri-moveout');
  bgTri3.classList.add('result-bg-tri-movement');
  bgTri4.classList.add('result-bg-tri-movement-2');
  bgTri5.classList.add('result-bg-tri-movement-3');
  bgTri6.classList.add('result-bg-tri-moveout');
  bgTri7.classList.add('result-bg-tri-moveout');
  setTimeout(function () {
    document.querySelector('.result-triangle > .content > .inner').style.opacity = "1";
  }, 2000);
};

var reloadBtn = document.querySelector('.reload');
reloadBtn.addEventListener('click', function (el) {
  window.location.reload();
});
start();
//# sourceMappingURL=all.js.map
