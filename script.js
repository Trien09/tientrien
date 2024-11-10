document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Ngừng form gửi dữ liệu mặc định
    
    // Lấy dữ liệu từ form
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    // Kiểm tra xem mật khẩu có trùng khớp không
    if (password !== confirmPassword) {
        document.getElementById('message').textContent = 'Mật khẩu xác nhận không trùng khớp!';
        return;
    }

    // Kiểm tra xem tài khoản đã tồn tại chưa
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let userExists = users.some(user => user.username === username);

    if (userExists) {
        document.getElementById('message').textContent = 'Tài khoản đã tồn tại!';
        return;
    }

    // Lưu thông tin người dùng vào localStorage
    users.push({ username: username, password: password });
    localStorage.setItem('users', JSON.stringify(users));

    // Hiển thị thông báo thành công
    document.getElementById('message').textContent = 'Đăng ký thành công!';
    document.getElementById('registration-form').reset();  // Làm mới form
});
