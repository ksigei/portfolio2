const form = document.getElementById('myForm');
function formValidate() {
  const error = document.getElementById('error-message');
  const email = document.getElementById('email');
  const name = document.getElementById('name');
  if (email.value.trim() === '') {
    error.innerHTML = 'Enter email to continue';
    return false;
  }
  if (email.value !== email.value.toLowerCase()) {
    error.innerHTML = `Hi, ${name.value} make sure your email is in lowercase. You can use ${email.value.toLowerCase()} instead`;
    return false;
  }
  return true;
}
form.addEventListener('submit', (submitForm) => {
  if (!formValidate()) {
    submitForm.preventDefault();
  }
});

