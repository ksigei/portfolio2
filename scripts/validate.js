function validateMail() {
  const form = document.getElementById('myForm');
  const email = form.elements.email.value;
  const re = /@/g;
  const lower = email.toLowerCase();

  if (re.test(String(email).toLowerCase()) === true) {
    if (lower === email) {
      form.submit();
    } else {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const error = document.createElement('msgSection');
        error.textContent = 'Oops the form is not sent, change your email to lowercase and retry.';
        error.id = 'errorMessage';
        setTimeout(() => {
          error.classList.add('fadeOut');
        }, 500);
        form.appendChild(error);
        setTimeout(() => {
          form.removeChild(document.getElementById('errorMessage'));
        }, 3500);
      });
    }
  }
}

validateMail();
