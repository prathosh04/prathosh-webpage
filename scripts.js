document.querySelector('.register-now').addEventListener('click', function() {
    document.querySelector('.front-page').style.display = 'none';
    document.querySelector('.form-page').style.display = 'block';
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validation for name fields (only letters)
    const nameFields = ['first-name', 'middle-name', 'last-name'];
    for (let id of nameFields) {
        let nameValue = document.getElementById(id).value;
        if (!/^[a-zA-Z]+$/.test(nameValue)) {
            alert('Invalid input in ' + id.replace('-', ' ') + '. Only letters are allowed.');
            return;
        }
    }

    // Validation for phone number (only digits)
    const phoneValue = document.getElementById('phone').value;
    if (!/^\d+$/.test(phoneValue)) {
        alert('Invalid input in phone number. Only digits are allowed.');
        return;
    }

    // Validation for QR code file size (max 5MB)
    const qrCodeInput = document.getElementById('qr-code');
    if (qrCodeInput.files[0].size > 5 * 1024 * 1024) {
        alert('QR code image size exceeds 5MB.');
        return;
    }

    document.querySelector('.form-page').style.display = 'none';
    document.querySelector('.thank-you-page').style.display = 'block';
});
