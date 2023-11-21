$(document).ready(function () {
    const carImages = [
        { index: 0, src: './assets/img/music/img-1.png' },
        { index: 0, src: './assets/img/music/img-2.png' },
        { index: 0, src: './assets/img/music/img-3.png' },
        { index: 0, src: './assets/img/music/img-4.png' },
        { index: 0, src: './assets/img/music/img-5.png' },
        { index: 0, src: './assets/img/music/img-6.png' },
        { index: 0, src: './assets/img/music/img-7.png' },
        { index: 0, src: './assets/img/music/img-8.png' },
        { index: 0, src: './assets/img/music/img-9.png' },
        { index: 0, src: './assets/img/music/img-10.png' },
        { index: 0, src: './assets/img/music/img-11.png' },
        { index: 0, src: './assets/img/music/img-12.png' },
        { index: 0, src: './assets/img/music/img-13.png' },
        { index: 0, src: './assets/img/music/img-14.png' },
        { index: 0, src: './assets/img/music/img-15.png' },
        { index: 0, src: './assets/img/music/img-16.png' },
        { index: 0, src: './assets/img/music/img-17.png' },
        { index: 0, src: './assets/img/music/img-18.png' },
        { index: 0, src: './assets/img/music/img-19.png' },
        { index: 0, src: './assets/img/music/img-20.png' },
        { index: 0, src: './assets/img/music/img-21.png' },
        { index: 0, src: './assets/img/music/img-22.png' },
        { index: 0, src: './assets/img/music/img-23.png' },
        { index: 0, src: './assets/img/music/img-24.png' },
        { index: 0, src: './assets/img/music/img-25.png' },
        { index: 0, src: './assets/img/music/img-26.png' },
        { index: 0, src: './assets/img/music/img-27.png' },
        { index: 0, src: './assets/img/music/img-28.png' },
        { index: 0, src: './assets/img/music/img-29.png' },
        { index: 0, src: './assets/img/music/img-30.png' },
        { index: 0, src: './assets/img/music/img-31.png' },
        { index: 0, src: './assets/img/music/img-32.png' },
        { index: 0, src: './assets/img/music/img-33.png' },
        { index: 0, src: './assets/img/music/img-34.png' },
        { index: 0, src: './assets/img/music/img-35.png' },
        { index: 0, src: './assets/img/music/img-36.png' },
        { index: 0, src: './assets/img/music/img-37.png' },
        { index: 0, src: './assets/img/music/img-38.png' },
        { index: 0, src: './assets/img/music/img-39.png' },
        { index: 0, src: './assets/img/music/img-40.png' },
        { index: 0, src: './assets/img/music/img-41.png' },
      ];
  
      const carNum = carImages.length;
  
      // Preload all the images into hidden div
      const preloadImgsDiv = document.getElementById('preload-imgs');
      carImages.forEach((car) => {
        const creatImg = new Image();
        creatImg.src = car.src;
        creatImg.style.display = 'none'; // Hide the preloaded images
        preloadImgsDiv.appendChild(creatImg);
      });
  
      // Control swipes using jquery.touchSwipe.min.js
      const swipeCarOptions = {
        triggerOnTouchEnd: true,
        swipeStatus: swipeStatus,
        allowPageScroll: 'vertical',
        threshold: 75
      };
  
      const getCarImgs = document.getElementById('imgContainer');
      $(getCarImgs).swipe(swipeCarOptions);
  
      function swipeStatus(event, phase, direction, distance) {
        const duration = 0;
        if (direction == 'left') {
          changeImg(distance);
        } else if (direction == 'right') {
          changeImgR(-distance);
        }
      }
  
      function changeImg(imgNum) {
        imgNum = Math.floor(imgNum / 8);
        const myImg = document.getElementById('myImg');
  
        let currentIndex = carImages.findIndex((car) => car.src === myImg.src);
        let newIndex = (currentIndex + imgNum) % carNum;
  
        if (newIndex < 0) {
          newIndex += carNum;
        }
  
        myImg.src = carImages[newIndex].src;
      }
  
      function changeImgR(imgNum) {
        imgNum = Math.floor(imgNum / 8);
        const myImg = document.getElementById('myImg');
  
        let currentIndex = carImages.findIndex((car) => car.src === myImg.src);
        let newIndex = (currentIndex + imgNum) % carNum;
  
        if (newIndex < 0) {
          newIndex += carNum;
        }
  
        myImg.src = carImages[newIndex].src;
      }
});