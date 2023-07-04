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
    return false;
}
share_close.onclick = () => {
    share.classList.remove('show');
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

// 关注与个人分页切换
const focusBtn = document.querySelector('.focus'), personalBtn = document.querySelector('.personal'),
    dynamicList = document.querySelector('.dynamic-list'), archiveList = document.querySelector('.archiveList');
focusBtn.onclick = () => {
    focusBtn.classList.add('on'), personalBtn.classList.remove('on');
    dynamicList.classList.add('show'), archiveList.classList.remove('show');
}
personalBtn.onclick = () => {
    personalBtn.classList.add('on'), focusBtn.classList.remove('on');
    archiveList.classList.add('show'), dynamicList.classList.remove('show');
}