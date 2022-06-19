const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');


function showError(fieldName) {
    fieldName.parentElement.className = 'form-control error';
    fieldName.nextElementSibling.innerHTML = `${capitaliseFieldName(fieldName)} is required`;
}

function showSuccess(fieldName) {
    fieldName.parentElement.className = 'form-control success';
}

function capitaliseFieldName(fieldName) {
    return fieldName.id.charAt(0).toUpperCase() + fieldName.id.slice(1);
}

function checkFieldValue(fieldArr) {
    fieldArr.forEach(element => {
        if (element.value === '') {
            showError(element);
        } else {
            showSuccess(element);
        }
    });
}

document.addEventListener('submit', (e) => {
    e.preventDefault();
    checkFieldValue([username, email, password, confirmPassword]);
});