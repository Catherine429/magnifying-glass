/**
 * Created by Administrator on 2018/3/1.
 */
function getByClass(obj, name) {
    var aEle = obj.getElementsByTagName('*');
    var aTemp = [];

    for(var i=0; i<aEle.length; i++) {
        if(aEle[i].className == name) {
            aTemp.push(aEle[i]);
        }
    }
    return aTemp;
}
window.onload = function () {
    var oSmallDiv = document.getElementById('smallPic');
    var oChosen = getByClass(oSmallDiv, 'chosen')[0];
    var oSmallPic = oSmallDiv.getElementsByTagName('img')[0];
    var oBigDiv = document.getElementById('bigPic');
    var oBigPic = oBigDiv.getElementsByTagName('img')[0];

    oSmallDiv.onmouseover = function () {
        oChosen.style.display = 'block';
        oBigDiv.style.display = 'block';
    }

    oSmallDiv.onmousemove = function (ev) {
        var oEvent = ev || event;

        var l = oEvent.clientX - oChosen.offsetWidth/2;
        var t = oEvent.clientY - oChosen.offsetHeight/2;

        if(l<oSmallPic.offsetLeft) {
            l=oSmallPic.offsetLeft;
        } else if(l>oSmallDiv.offsetWidth-oSmallPic.offsetLeft - oChosen.offsetWidth) {
            l = oSmallDiv.offsetWidth-oSmallPic.offsetLeft - oChosen.offsetWidth;
        }

        if(t < oSmallPic.offsetTop) {
            t = oSmallPic.offsetTop
        } else if(t>oSmallDiv.offsetHeight - oSmallPic.offsetTop - oChosen.offsetWidth) {
            t=oSmallDiv.offsetHeight - oSmallPic.offsetTop - oChosen.offsetWidth
        }

        oChosen.style.left = l + 'px';
        oChosen.style.top = t + 'px';

        var scaleX = (oChosen.offsetLeft-oSmallPic.offsetLeft)/(oSmallPic.offsetWidth - oChosen.offsetWidth);
        var scaleY = (oChosen.offsetTop - oSmallPic.offsetTop)/(oSmallPic.offsetHeight-oChosen.offsetHeight);
        document.title = scaleY;
        oBigPic.style.left = -(oBigPic.offsetWidth-oBigDiv.offsetWidth) * scaleX + 'px';
        oBigPic.style.top = -(oBigPic.offsetHeight-oBigDiv.offsetHeight) * scaleY + 'px';
    }

    oSmallDiv.onmouseout = function () {
        oChosen.style.display = 'none';
        oBigDiv.style.display = 'none';
    }

}