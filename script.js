document.addEventListener('DOMContentLoaded', function () {
  var loginForm = document.getElementById('loginForm');
  var signupForm = document.getElementById('signupForm');
  var navBtn = document.getElementById('navBtn');
loginForm.style.display = 'none';
  signupForm.style.display = 'none';

  navBtn.addEventListener('click', function () {
    toggleForm(loginForm);
    toggleForm(signupForm);
  });

  document.addEventListener('click', function (event) {
    if (event.target !== navBtn && event.target.closest('.form') === null) {
      closeForms();
    }
  });

  function toggleForm(form) {
    if (form.style.display === 'block') {
      form.style.display = 'none';
    } else {
      form.style.display = 'block';
    }
  }

  function closeForms() {
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
  }

  var loginFormElement = document.getElementById('loginFormElement');
  var signupFormElement = document.getElementById('signupFormElement');

  loginFormElement.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    alert('Login successful!\nWelcome, ' + username + '!');
    closeForms();
  });

  signupFormElement.addEventListener('submit', function (event) {
    event.preventDefault();
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;

    alert('Sign up successful!\nWelcome, ' + newUsername + '!');
    closeForms();
  });
});
