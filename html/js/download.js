document.querySelector('.download').addEventListener('click', function () {
    html2canvas(document.getElementById('main')).then(function (canvas) {
        canvas.toBlob(function (blob) {
            var link = document.createElement('a');
            document.body.appendChild(link);
            let titleName = document.querySelector('.title').innerHTML;
            link.download = `${titleName}.jpg`; // 使用 JPEG 格式
            link.href = URL.createObjectURL(blob);
            link.target = '_blank';
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href); // 释放 URL 对象
        }, 'image/jpeg', 0.8); // 使用 JPEG 格式，质量为 0.8（范围是 0 到 1）
    });
});