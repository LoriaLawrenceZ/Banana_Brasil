function validaCampos(e, email, senha) {
    var valorEmail = email.value;
    var valorSenha = senha.value;

    if (valorEmail.length == 0 && valorSenha < 6) {
        e.preventDefault();
        if(email == emailE && senha == senhaE){
            mostrarDicaE(e, email, dicaEE);
            mostrarDicaS(e, senha, dicaSE);
        }
        else{
            mostrarDicaE(e, email, dicaEC);
            mostrarDicaS(e, senha, dicaSC);
        }
        return false;
    } else if(valorEmail == 0){
        e.preventDefault();
        if(email == emailE){
            mostrarDicaE(e, email, dicaEE);
        }
        else{
            mostrarDicaE(e, email, dicaEC);
        }
        return false;
    } else if(valorSenha < 6){
        e.preventDefault();
        if(senha == senhaE){
            mostrarDicaS(e, senha, dicaSE);
        }
        else{
            mostrarDicaS(s, senha, dicaSC);
        }
        return false;
    }
}
function mostrarDicaE(e, email, dica) {
    var valorEmail = email.value;
    if (valorEmail.length == 0) {
        dica.style.display = "block";
    }
    else {
        dica.style.display = "none";
    }
}
function mostrarDicaS(e, senha, dica) {
    var valorSenha = senha.value;
    if (valorSenha < 6) {
        dica.style.display = "block";
    }
    else {
        dica.style.display = "none";
    }
}

var dicaEE = document.getElementById("dicaEE");
dicaEE.style.display = "none";
var dicaSE = document.getElementById("dicaSE");
dicaSE.style.display = "none";
var dicaEC = document.getElementById("dicaEC");
dicaEC.style.display = "none";
var dicaSC = document.getElementById("dicaSC");
dicaSC.style.display = "none";

var emailE = document.getElementById("emailE");
var senhaE = document.getElementById("senhaE");
var emailC = document.getElementById("emailC");
var senhaC = document.getElementById("senhaC");

var elFormEntrar = document.getElementById("formEntrar");
var elFormCadastrar = document.getElementById("formCadastrar");

elFormEntrar.addEventListener("submit", function (e) { validaCampos(e, emailE, senhaE) });
elFormCadastrar.addEventListener("submit", function (e) { validaCampos(e, emailC, senhaC) });

emailE.addEventListener("blur", function (e) { mostrarDicaE(e, emailE, dicaEE) });
senhaE.addEventListener("blur", function (e) { mostrarDicaS(e, senhaE, dicaSE) })
emailC.addEventListener("blur", function (e) { mostrarDicaE(e, emailC, dicaEC) });
senhaC.addEventListener("blur", function (e) { mostrarDicaS(e, senhaC, dicaSC) })