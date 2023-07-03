let button = document.querySelector('.button');
let ball = document.querySelector('.ball');
let bottom = document.querySelector('.bottom');
let off = document.querySelector('.off');
let on = document.querySelector('.on');
let turn = document.getElementById('turn');
let clball = document.getElementById('clball');
let index = 0;
/* 每当点击按钮的时候,index的值就会发生变化,如果index为0的话,那么点击的时候index变为1,反之变为0
 * 当index的值为0时,按钮里的球划到右边,并且将右边字的透明度变为1,下面的登录卡旋转180度,为注册
 * 当index的值为1时,按钮里的球划到左边,并且将右边字的透明度变为0.5,下面的登录卡旋转回0度,为登录 */
button.addEventListener('click', () => {
    if (index == 0) {
        index = 1;
        ball.style.left = 61 + '%';
        on.style.opacity = 1;
        off.style.opacity = .3;
        bottom.style.transform = "rotateY(180deg)";
        turn.style.background = 'linear-gradient(to right,#43e97b,#38f9d7,#43e97b)';
        clball.style.backgroundColor = 'rgba(239, 236, 15,.8)';
    } else {
        index = 0;
        ball.style.left = 0;
        on.style.opacity = .3;
        off.style.opacity = 1;
        bottom.style.transform = "rotateY(0deg)";
        turn.style.background = 'linear-gradient(to right,#4481eb,#04befe,#4481eb)';
        clball.style.backgroundColor = 'rgba(255, 192, 203,.8)';
    }
})

// 针对表单的一些验证操作

/* 此处注意:登录表单的验证操作并不全面,还未能实现从后端取得用户名和密码的哈希映射,故仅和注册的验证操作一致 */

// 1.验证登录表单的用户名
// 1.1获取用户名表单
const username_login = document.querySelector('[name=username_login]')
// 1.2 使用change事件,值发生变化时
username_login.addEventListener('change', verifyName)
// 1.3封装verifyName函数
function verifyName() {
    const span = username_login.nextElementSibling
    // 1.4使用用户名正则表达式
    const reg = /^[a-zA-Z0-9-_]{6,10}$/ /* 限定用户名格式为6-10位的字母数字符号组成 */
    if (!reg.test(username_login.value)) {
        span.innerText = '用户名格式有误'
        return false
    }
    // 1.5合法格式,清空span
    span.innerText = ''
    return true
}
// 2.验证登录表单的密码(基本同上)
const password_login = document.querySelector('[name=password_login]')
password_login.addEventListener('change', verifyPwd)
function verifyPwd() {
    const span = password_login.nextElementSibling
    const reg = /^[a-zA-Z0-9-_]{8,16}$/   /* 限定密码格式为8-16位的字母数字符号组成 */
    if (!reg.test(password_login.value)) {
        span.innerText = '密码错误'
        return false
    }
    span.innerText = ''
    return true
}

// 3.验证注册表单的用户名
const username_register = document.querySelector('[name=username_register]')
username_register.addEventListener('change', verifyNameR)
function verifyNameR() {
    const span = username_register.nextElementSibling
    const reg = /^[a-zA-Z0-9-_]{6,10}$/ /* 限定用户名格式为6-10位的字母数字符号组成 */
    if (!reg.test(username_register.value)) {
        span.innerText = '用户名格式有误'
        return false
    }
    span.innerText = ''
    return true
}
// 4.验证注册表单的密码
const password_register = document.querySelector('[name=password_register]')
password_register.addEventListener('change', verifyPwdR)
function verifyPwdR() {
    const span = password_register.nextElementSibling
    const reg = /^[a-zA-Z0-9-_]{8,16}$/   /* 限定密码格式为8-16位的字母数字符号组成 */
    if (!reg.test(password_register.value)) {
        span.innerText = '密码错误'
        return false
    }
    span.innerText = ''
    return true
}
// 5.验证注册表单的再次确认密码区
const confirm_register = document.querySelector('[name=confirm_register]')
confirm_register.addEventListener('change', verifyConfirm)
function verifyConfirm() {
    // 其他操作基本一致,不过这里不需要用正则判断,而是与password_register作比较
    const span = confirm_register.nextElementSibling
    if (confirm_register.value != password_register.value) {
        span.innerText = '两次输入不一致'
        return false
    }
    span.innerText = ''
    return true
}

// 6.提交模块
const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    if ((!verifyName() || !verifyPwd()) && (!verifyNameR() || !verifyPwdR() || !verifyConfirm()))
        e.preventDefault();
    else {
        window.location.href = './index.html';
        window.event.returnValue = false;
    }
})