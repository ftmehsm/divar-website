const express = require('express');
const path = require('path');

const app = express();

// ارائه فایل‌های استاتیک از پوشه build فرانت‌اند
app.use(express.static(path.join(__dirname, '../frontend/build')));

// مدیریت مسیرهای دیگر و بازگشت به index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// پورت را از متغیر محیطی یا پیش‌فرض 5000 دریافت کنید
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
