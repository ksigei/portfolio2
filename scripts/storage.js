function check() {
  if (localStorage.getItem('storage')) {
    const items = localStorage.getItem('storage');
    const parsed = JSON.parse(items);
    const form = document.getElementById('myForm');
    form.elements.name.value = parsed.name;
    form.elements.email.value = parsed.email;
    form.elements.message.value = parsed.message;
  }
}
window.onload = check;

function keypress() {
  const form = document.getElementById('myForm');
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  function populateStorage() {
    const storage = {
      name,
      email,
      message,
    };
    localStorage.setItem('storage', JSON.stringify(storage));
  }
  if (name === '' && email === '' && message === '') {
    localStorage.clear();
  } else {
    populateStorage();
  }
}
keypress();
