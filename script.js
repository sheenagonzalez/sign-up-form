var pwdInput = document.getElementById("password");
var confirmPwdInput = document.getElementById("confirm-password");
var submitBtn = document.getElementById("submit-btn");
var pwdRequirements = document.getElementById("pwd-requirements");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user starts to type something inside the password field
pwdInput.addEventListener("keyup", function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (pwdInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (pwdInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (pwdInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (pwdInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
});

let timeout;
confirmPwdInput.addEventListener("keyup", function () { 
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    if (pwdInput.value === confirmPwdInput.value) {
      submitBtn.disabled = false;
      confirmPwdInput.setCustomValidity('');
    } else {
      confirmPwdInput.setCustomValidity('Passwords don\'t match.');
      confirmPwdInput.reportValidity();
      submitBtn.disabled = true;
    }
  }, 500);
});

function togglePwd(btnElem) {
  var inputElem, showPwd, hidePwd;
  if (btnElem.id === 'toggleConfirmPwdBtn') {
    inputElem = document.getElementById('confirm-password');
    showPwd = document.getElementById('showConfirmPwd');
    hidePwd = document.getElementById('hideConfirmPwd');
  } else if (btnElem.id === 'togglePwdBtn') {
    inputElem = document.getElementById('password');
    showPwd = document.getElementById('showPwd');
    hidePwd = document.getElementById('hidePwd');
  }
  if (inputElem.type === 'password') {
    inputElem.type = 'text';
    showPwd.style.display = 'none';
    hidePwd.style.display = 'inline-flex';
  } else {
    inputElem.type = 'password';
    hidePwd.style.display = 'none';
    showPwd.style.display = 'inline-flex';
  }
}
