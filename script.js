const inputPassword = document.getElementById('password');
const inputConfirmPassword = document.getElementById('confirmPassword');
const errorMessage = document.querySelector('.message');

function checkMatchingPassword() {
	if (inputPassword.value !== inputConfirmPassword.value) {
		errorMessage.style.display = 'inline';
		inputPassword.classList.add('error');
		inputConfirmPassword.classList.add('error');
	} else {
		errorMessage.style.display = 'none';
		inputPassword.classList.remove('error');
		inputConfirmPassword.classList.remove('error');
	}
}

inputPassword.addEventListener('input', event => {
	if (inputConfirmPassword.value.length > 0) checkMatchingPassword();
})

inputConfirmPassword.addEventListener('input', event => {
	if (inputPassword.value.length > 0) checkMatchingPassword();
});
