// 顶部分区下拉菜单
var open = true;
let dropButton = document.getElementById('dropdown');
let menu = document.getElementById('dropmenu');
dropButton.onclick = function () {
    if (open) {
        this.style.rotate = '540deg';
        menu.style.display = 'flex';
        open = false;
    }
    else {
        this.style.rotate = '0deg';
        menu.style.display = 'none';
        open = true;
    }
}

let color = document.querySelectorAll('.menu-item');
for (let i = 0; i < color.length; i++) {
    color[i].onmouseover = function () {
        this.style.backgroundColor = 'rgba(68, 191, 136, .4)';
    }
    color[i].onmouseout = function () {
        this.style.backgroundColor = '';
    }
}

// 底部导航栏
let tab_middle = document.querySelector('.middle');
tab_middle.addEventListener('click', (e) => {
    tab_middle.classList.toggle('open');
});