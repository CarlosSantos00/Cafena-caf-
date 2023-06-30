const mode = document.getElementById("mode_icon");

mode.addEventListener("click", () => {
  const form = document.getElementById("login_form");

  if (mode.classList.contains("fa-moon")) {
    mode.classList.remove("fa-moon");
    mode.classList.add("fa-sun");

    form.classList.add("dark");
    return;
  }

  mode.classList.remove("fa-sun");
  mode.classList.add("fa-moon");

  form.classList.remove("dark");
});



function validaCampos() {

  document.getElementById("errorLogin").style.display = "none";
  document.getElementById("errorSobrenome").style.display = "none";
  document.getElementById("errorEmail").style.display = "none";
  document.getElementById("errorCPF").style.display = "none";
  document.getElementById("errorData").style.display = "none";

 
  var nome = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;
  var email = document.getElementById("email").value;
  var cpf = document.getElementById("cpf").value;
  var data = document.getElementById("data").value;

 
  var hasEmptyFields = false;
  if (nome.trim() === "") {
    document.getElementById("errorLogin").style.display = "block";
    hasEmptyFields = true;
  }
  if (sobrenome.trim() === "") {
    document.getElementById("errorSobrenome").style.display = "block";
    hasEmptyFields = true;
  }
  if (email.trim() === "") {
    document.getElementById("errorEmail").style.display = "block";
    hasEmptyFields = true;
  }
  if (cpf.trim() === "") {
    document.getElementById("errorCPF").style.display = "block";
    hasEmptyFields = true;
  }
  if (data.trim() === "") {
    document.getElementById("errorData").style.display = "block";
    hasEmptyFields = true;
  }


  if (hasEmptyFields) {
    var firstEmptyField = document.querySelector("#login_form input:invalid");
    if (firstEmptyField) {
      firstEmptyField.focus();
    }
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Cadastro Efetuado",
    text: "Parábens, agora você é um associado!",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://sweetalert2.github.io/images/nyan-cat.gif")
      left top
      no-repeat
    `,
    confirmButtonText: "OK",
    allowOutsideClick: false,
  }).then(() => {

    window.location.href = "../principal/home.html";
  });

  // Validate the CPF
  if (!validaCPF(cpf)) {
    Swal.fire({
      icon: "error",
      title: "CPF inválido",
      text: "Por favor, insira um CPF válido.",
      confirmButtonText: "OK",
      allowOutsideClick: false,
    }).then(() => {
      document.getElementById("cpf").focus();
    });
    return;
  }

  // Função para validar o CPF
  function validaCPF(cpf) {
    cpf = cpf.replace(/\D/g, ""); // Remover caracteres não numéricos

    // Verificar se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }

    // Verificar se todos os dígitos são iguais (CPF inválido)
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }

    // Verificar o primeiro dígito verificador
    var sum = 0;
    var factor = 10;
    for (var i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * factor;
      factor--;
    }
    var remainder = (sum * 10) % 11;
    var digit1 = remainder === 10 ? 0 : remainder;

    if (parseInt(cpf.charAt(9)) !== digit1) {
      return false;
    }

    // Verificar o segundo dígito verificador
    sum = 0;
    factor = 11;
    for (var j = 0; j < 10; j++) {
      sum += parseInt(cpf.charAt(j)) * factor;
      factor--;
    }
    remainder = (sum * 10) % 11;
    var digit2 = remainder === 10 ? 0 : remainder;

    if (parseInt(cpf.charAt(10)) !== digit2) {
      return false;
    }

    return true;
  }
}
