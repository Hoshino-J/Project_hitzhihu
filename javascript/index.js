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

// 弹窗控制
const askBtn = document.querySelector('.askBtn'),
    ask = document.querySelector('.shell_ask'),
    askForm = document.querySelector('.ask'),
    ask_close = document.querySelector('#ask_close');
askBtn.onclick = () => {
    if (share.classList.contains('show'))
        share.classList.remove('show');
    ask.classList.add('show');
}
ask_close.onclick = () => {
    ask.classList.remove('show');
}

const shareBtn = document.querySelector('.shareBtn'),
    share = document.querySelector('.shell_share'),
    shareForm = document.querySelector('.share'),
    share_close = document.querySelector('#share_close');
shareBtn.onclick = () => {
    if (ask.classList.contains('show'))
        ask.classList.remove('show');
    share.classList.add('show');
}
share_close.onclick = () => {
    share.classList.remove('show');
}

// 分享弹窗中的上传格式控件
const shareTextBtn = document.querySelector('#textBtn'), shareText = document.querySelector('#shareText'),
    sharePictureBtn = document.querySelector('#pictureBtn'), sharePicture = document.querySelector('.image-container'),
    shareVideoBtn = document.querySelector('#videoBtn'), shareVideo = document.querySelector('.video-container'),
    shareFileBtn = document.querySelector('#fileBtn'), shareFile = document.querySelector('.file-container'),
    uploadShell = document.querySelector('.divUpload');
shareTextBtn.onclick = () => {
    uploadShell.style.display = 'none';
    shareText.style.display = 'block', sharePicture.style.display = 'none', shareVideo.style.display = 'none', shareFile.style.display = 'none';
}
sharePictureBtn.onclick = () => {
    uploadShell.style.display = 'block';
    shareText.style.display = 'none', sharePicture.style.display = 'block', shareVideo.style.display = 'none', shareFile.style.display = 'none';
}
shareVideoBtn.onclick = () => {
    uploadShell.style.display = 'block';
    shareText.style.display = 'none', sharePicture.style.display = 'none', shareVideo.style.display = 'block', shareFile.style.display = 'none';
}
shareFileBtn.onclick = () => {
    uploadShell.style.display = 'block';
    shareText.style.display = 'none', sharePicture.style.display = 'none', shareVideo.style.display = 'none', shareFile.style.display = 'block';
}

const submitWindows = document.querySelector('.submit');
submitWindows.onclick = () => {
    uploadShell.style.display = 'none';
    shareText.style.display = 'none', sharePicture.style.display = 'none', shareVideo.style.display = 'none', shareFile.style.display = 'none';
}