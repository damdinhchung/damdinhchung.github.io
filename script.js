function submitForm(){
    const username = document.getElementById("usr").value;
    const password = document.getElementById("pwd").value;
    const xhr = new XMLHttpRequest();
    const logMessage = `Đăng nhập: Tên đăng nhập - ${usr}, Mật khẩu - ${pwd}`;
    console.log(logMessage);
}
submitForm()