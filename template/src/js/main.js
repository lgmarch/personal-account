document.addEventListener("DOMContentLoaded", function () {
    const uploadButton = document.getElementById("uploadButton");
    const fileInput = document.getElementById("fileInput");

    if (uploadButton && fileInput) {
        uploadButton.addEventListener("click", function () {
            fileInput.click();
        });

        fileInput.addEventListener("change", function () {
            if (fileInput.files.length > 0) {
                console.log("Выбрано файлов:", fileInput.files.length);
            }
        });
    }
});
