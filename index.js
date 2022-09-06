//Selecionando elementos

const form = document.querySelector('.form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const passwordConfirmation = document.querySelector('#password-confirmation');

// Funções

function checkInput() {
  const usernameValue = username.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;
  const emailValue = email.value;

  if (usernameValue === '') {
    setError(username, 'Por favor insira seu usuário');
  } else {
    setSucess(username);
  }

  if (emailValue === '') {
    setError(email, 'Por favor insira seu email');
  } else if (!checkEmail(emailValue)) {
    setError(email, 'Por favor insira um email válido');
  } else {
    setSucess(email);
  }

  if (passwordValue === '') {
    setError(password, 'Por favor insira sua senha');
  } else if (passwordValue.length < 7) {
    setError(password, 'Por favor insira uma senha de pelo menos 7 caracteres');
  } else {
    setSucess(password);
  }

  if (passwordConfirmationValue === '') {
    setError(passwordConfirmation, 'Você deve confirmar sua senha');
  } else if (passwordConfirmationValue !== passwordValue) {
    setError(passwordConfirmation, 'As senhas devem ser iguais');
  } else {
    setSucess(passwordConfirmation);
  }

  const allForms = document.querySelectorAll('.form-control');
  const validForm = [...allForms].every(
    (allForms) => allForms.className === 'form-control sucess',
  );

  if (validForm) {
    console.log('Formulário validado!');
  }
}

function setError(input, message) {
  const forms = input.closest('div');
  const small = forms.querySelector('small');
  small.innerText = message;

  const inputDiv = input.closest('div');
  inputDiv.className = 'form-control error';
}

function setSucess(input) {
  const inputDiv = input.closest('div');
  inputDiv.className = 'form-control sucess';
}

// Eventos

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInput();
});

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );
}
