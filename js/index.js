
    document.write("<script>alert('no time！')</script>")
    console.log('Mei')
    console.log(-1/0)
    window.onload = function () {
    const clickBtn1 = document.getElementById('btn1');
    const clickBtn2 = document.getElementById('btn2');
    const move = document.getElementById("container_move");
    const showHide1 = document.getElementById('over-left');
    const showHide2 = document.getElementById('over-right');
    clickBtn1.onclick = function () {
        move.style.left = "400px";
        showHide1.style.opacity="0";
        showHide1.style.zIndex="2";
        showHide2.style.opacity="1";
    }
    clickBtn2.onclick = function () {
        move.style.left = "0px";
        showHide1.style.opacity="1";
        showHide1.style.zIndex="5";
        showHide2.style.opacity="0";
    }
    }