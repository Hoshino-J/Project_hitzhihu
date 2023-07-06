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

// tab分页切换
const focusBtn = document.querySelector('.focus'), personalBtn = document.querySelector('.personal'),
    solveBtn = document.querySelector('.solve'), problemBtn = document.querySelector('.problem'),
    dynamicList = document.querySelector('.dynamic-list'), archiveList = document.querySelector('.archive-list'),
    answerList = document.querySelector('.answer-list'), askList = document.querySelector('.ask-list');
focusBtn.onclick = () => {
    focusBtn.classList.add('on'), personalBtn.classList.remove('on'),
        solveBtn.classList.remove('on'), problemBtn.classList.remove('on');
    dynamicList.classList.add('show'), archiveList.classList.remove('show'),
        answerList.classList.remove('show'), askList.classList.remove('show');
}
personalBtn.onclick = () => {
    focusBtn.classList.remove('on'), personalBtn.classList.add('on'),
        solveBtn.classList.remove('on'), problemBtn.classList.remove('on');
    dynamicList.classList.remove('show'), archiveList.classList.add('show'),
        answerList.classList.remove('show'), askList.classList.remove('show');
}
solveBtn.onclick = () => {
    focusBtn.classList.remove('on'), personalBtn.classList.remove('on'),
        solveBtn.classList.add('on'), problemBtn.classList.remove('on');
    dynamicList.classList.remove('show'), archiveList.classList.remove('show'),
        answerList.classList.add('show'), askList.classList.remove('show');
}
problemBtn.onclick = () => {
    focusBtn.classList.remove('on'), personalBtn.classList.remove('on'),
        solveBtn.classList.remove('on'), problemBtn.classList.add('on');
    dynamicList.classList.remove('show'), archiveList.classList.remove('show'),
        answerList.classList.remove('show'), askList.classList.add('show');
}

// 赞同回答与反对回答
const agreeBtn = document.querySelector('.agreeVote'), disagreeBtn = document.querySelector('.disagreeVote');
agreeBtn.onclick = () => {
    agreeBtn.classList.add('is-active'), disagreeBtn.classList.remove('is-active');
}
disagreeBtn.onclick = () => {
    disagreeBtn.classList.add('is-active'), agreeBtn.classList.remove('is-active');
}

const agreeABtn = document.querySelector('.agreeVote_article'), disagreeABtn = document.querySelector('.disagreeVote_article');
agreeABtn.onclick = () => {
    agreeABtn.classList.add('is-active'), disagreeABtn.classList.remove('is-active');
}
disagreeABtn.onclick = () => {
    disagreeABtn.classList.add('is-active'), agreeABtn.classList.remove('is-active');
}

const agreeAnBtn = document.querySelector('.agreeVote_answer'), disagreeAnBtn = document.querySelector('.disagreeVote_answer');
agreeAnBtn.onclick = () => {
    agreeAnBtn.classList.add('is-active'), disagreeAnBtn.classList.remove('is-active');
}
disagreeAnBtn.onclick = () => {
    disagreeAnBtn.classList.add('is-active'), agreeAnBtn.classList.remove('is-active');
}

// 关注答主
const followBtn = document.querySelector('.followBtn');
var flag = true;
followBtn.onclick = () => {
    if (flag)
        followBtn.classList.add('followed');
    else
        followBtn.classList.remove('followed');
    flag = !flag;
}

const followABtn = document.querySelector('.followABtn');
var flagA = true;
followABtn.onclick = () => {
    if (flagA)
        followABtn.classList.add('followed');
    else
        followABtn.classList.remove('followed');
    flagA = !flagA;
}

// 切换到首页
document.querySelector('#turnToHome').onclick = () => {
    window.location.href = './index.html';
    window.event.returnValue = false;
}