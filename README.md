# tientrien
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng Ký Người Dùng</title>
    <!-- Liên kết với file CSS -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Đăng Ký Người Dùng</h1>
        <!-- Form đăng ký -->
        <form id="registration-form">
            <label for="username">Tài Khoản:</label>
            <input type="text" id="username" name="username" required placeholder="Nhập tài khoản" />
            
            <label for="password">Mật Khẩu:</label>
            <input type="password" id="password" name="password" required placeholder="Nhập mật khẩu" />

            <label for="confirm-password">Xác Nhận Mật Khẩu:</label>
            <input type="password" id="confirm-password" name="confirm-password" required placeholder="Nhập lại mật khẩu" />

            <button type="submit">Đăng Ký</button>
        </form>
        <p id="message"></p>
    </div>

    <!-- Liên kết với file JavaScript -->
    <script src="script.js"></script>
</body>
</html>
