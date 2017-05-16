/**
 * Created by aq on 2017/5/16.
 */

function init() {
    var canvas = document.getElementById('love-canvas');
    var ctx = canvas.getContext('2d');

    var img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 0, 0);
    }
    img.src = 'waner.svg';

    ctx.font = "normal 15px Verdana";
    ctx.fillStyle = "#000000";
    ctx.fillText("Love is a plant of tenderest growth: ", 100, 50);
    ctx.fillText("treat it well, take thought for it and it may grow strong and perfume your whole life.", 140, 75);
}

