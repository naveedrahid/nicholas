$(document).ready(function () {
    const num = 41;

    for (var i = 1; i <= num; i++) {
        var img = document.createElement('img');
        img.src = '/assets/img/music/img-' + i + '.png';
        document.getElementById('preload-imgs').appendChild(img);
    }

    var swipeOptions = {
        triggerOnTouchEnd: true,
        swipeStatus: swipeStatus,
        allowPageScroll: "vertical",
        threshold: 75
    }

    $(function () {
        imgs = $(".bannerSideImage");
        imgs.swipe(swipeOptions);
    });

    function swipeStatus(event, phase, direction, distance) {
        var duration = 5;
        if (direction == "left") {
            changeImg(distance);
        } else if (direction == "right") {
            changeImgR(-distance);
        }
    }

    function changeImg(imgNum) {
        imgNum = Math.floor(imgNum / 8);

        if (imgNum < 1) {
            imgNum += num;
        }
        if (imgNum > num) {
            imgNum -= num;
        }
        updateImage(imgNum);
    }

    function changeImgR(imgNum) {
        imgNum = Math.floor(imgNum / 8);

        var num2 = -Math.abs(num);
        if (imgNum > num2) {
            imgNum += num;
        }
        if (imgNum <= num2) {
            imgNum += num * 2;
        }
        updateImage(imgNum);
    }

    function updateImage(imgNum) {
        // Ensure imgNum is within the range of 1 to num
        imgNum = (imgNum - 1 + num) % num + 1;

        // Remove any existing '--' from the src to avoid duplicates
        var currentSrc = document.getElementById("myImg").src;
        var cleanSrc = currentSrc.replace(/--/g, '');

        // Update the image source
        document.getElementById("myImg").src = cleanSrc.replace(/\d+/, imgNum);
    }
});