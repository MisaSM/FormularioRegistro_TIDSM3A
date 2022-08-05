var firstName = document.getElementById("firstName");
var secondName = document.getElementById("secondName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var currentTable = document.getElementById("table");
let regex = /[0-9]/g;


function checkName(firstName) {
   if (regex.test(firstName.value) === true || firstName.value.length == 0) {
        alert("El nombre es invalido, verifique que no incluya numeros y no este vacio");
        return false;
   }
   return true;

}

function check2ndName(secondName) {
    if (regex.test(secondName.value) === true || secondName.value.length == 0) {
        alert("El apellido es invalido o está vacio, verifiquelo e intente de nuevo");
        return false;
    }
    return true;
}


function verifyPasswords(password) {
    if (password.value != confirmPassword.value || password.value.length == 0) {
       alert("Las contraseñas no son iguales o estan vacías, verifiquelas e intentelo de nuevo"); 
       return false;
    }
    return true;
}

function addTableElement(firstName, secondName, email) {
    let row = table.insertRow();
    let cell = row.insertCell();
    cell.innerHTML = firstName.value;
    cell = row.insertCell();
    cell.innerHTML = secondName.value;
    cell = row.insertCell();
    cell.innerHTML = email.value;
}

function submitData() {
    if (checkName(firstName) == false || check2ndName(secondName) == false || verifyPasswords(password) == false) {
        return;}
        addTableElement(firstName, secondName, email);
    }


