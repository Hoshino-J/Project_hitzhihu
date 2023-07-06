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

// 主体部分局部刷新
let tabs = document.querySelectorAll('.tab');
let content = document.getElementById('content');
tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
        // 检查是否点击了第三个tab
        if (index === 2) {
            // 发起Ajax请求，获取新内容
            // 替换主体部分的内容
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // 获取到新的内容
                    var newContent = xhr.responseText;
                    content.innerHTML = newContent;
                }
            };
            xhr.open('GET', 'your_ajax_endpoint', true);
            xhr.send();
        } else {
            // 切换选中状态
            tabs.forEach(function (tab) {
                tab.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// 弹窗控制
const askBtn = document.querySelector('.askBtn'),
    ask = document.querySelector('.shell_ask'),
    askForm = document.querySelector('.ask'),
    ask_close = document.querySelector('#ask_close');
askBtn.onclick = () => {
    if (share.classList.contains('show'))
        share.classList.remove('show');
    if (message.classList.contains('show'))
        message.classList.remove('show');
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
    if (message.classList.contains('show'))
        message.classList.remove('show');
    share.classList.add('show');
    return false;
}
share_close.onclick = () => {
    share.classList.remove('show');
    return false;
}

const messageBtn = document.querySelector('.messageBtn'),
    message = document.querySelector('.shell_message'),
    message_close = document.querySelector('#message_close');
messageBtn.onclick = () => {
    if (ask.classList.contains('show'))
        ask.classList.remove('show');
    if (share.classList.contains('show'))
        share.classList.remove('show');
    message.classList.add('show');
    return false;
}
message_close.onclick = () => {
    message.classList.remove('show');
    return false;
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
    return false;
}
sharePictureBtn.onclick = () => {
    uploadShell.style.display = 'block';
    shareText.style.display = 'none', sharePicture.style.display = 'block', shareVideo.style.display = 'none', shareFile.style.display = 'none';
    return false;
}
shareVideoBtn.onclick = () => {
    uploadShell.style.display = 'block';
    shareText.style.display = 'none', sharePicture.style.display = 'none', shareVideo.style.display = 'block', shareFile.style.display = 'none';
    return false;
}
shareFileBtn.onclick = () => {
    uploadShell.style.display = 'block';
    shareText.style.display = 'none', sharePicture.style.display = 'none', shareVideo.style.display = 'none', shareFile.style.display = 'block';
    return false;
}

// 信息侧栏
const menuBtn = document.getElementById('menuBtn'), menuSide = document.querySelector('.menuSide'), menuText = document.querySelectorAll('.menuText');
menuBtn.addEventListener('click', () => {
    menuSide.classList.toggle('open');
    menuText.forEach(function (text, index) {
        setTimeout(() => {
            text.classList.toggle('open2');
        }, index * 50);
    });
});

// 切换到个人信息页面
document.querySelector('#turnToUser').onclick = () => {
    window.location.href = './userinfo.html';
    window.event.returnValue = false;
}