// Manipulacao Eventos HTML
document.querySelector('.avatar-content').querySelector('div').innerHTML = "<strong>Nome Usuário</strong>";
//document.querySelector('[name="name"]').placeholder = "Digite seu primeiro nome";
document.getElementsByName('name')[0].placeholder = "Digite seu primeiro nome";

document.getElementsByTagName('body')[0].style.backgroundColor = '#fafafa';

let arrInput = document.querySelectorAll('input');
let i = 0;
arrInput.forEach(rad => {    
    i++;    
    rad.style.borderRadius = '20px';
    if (i === arrInput.length){
        
    }    
});

document.querySelector('.form-auth').style.cssText = 'display: flex; flex-direction: column;';

// Eventos Formulario
let pass = document.getElementsByName('password')[0];
let nome = document.getElementsByName('name')[0]
let surname = document.getElementsByName('surname')[0]
let email = document.getElementsByName('email')[0]

nome.addEventListener('blur', function(e) {
    if (nome.value.length < 2 || nome.value.length > 80){
        nome.setCustomValidity('Nome deve ter no minimo 2 caracteres e no maximo 80')
    }else{
        nome.setCustomValidity('')
    }
})

surname.addEventListener('blur', function(e) {
    if (surname.value.length < 2 || surname.value.length > 100){
        surname.setCustomValidity('Sobrenome deve ter no minimo 2 caracteres e no maximo 100')
    }else{
        surname.setCustomValidity('')
    }
})

email.addEventListener('change', function(e) {    
    if (email.value.length < 10 || email.value.length > 180){
        email.setCustomValidity('Email deve ter no minimo 10 caracteres e no maximo 180')
    }else if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        email.setCustomValidity('Email deve conter @ e .')
    }else{
        email.setCustomValidity('')
    }
})


pass.onblur = function(){    
    let inputDtNasc = document.createElement('input')
    inputDtNasc.setAttribute('type','text')
    inputDtNasc.setAttribute('name','dtNascimento')
    inputDtNasc.setAttribute('placeholder','Digite sua data de nascimento')
    inputDtNasc.setAttribute('style','border-radius:20px')
    pass.appendChild(inputDtNasc)
}

let formCad = document.querySelector('.form-auth')
formCad.onsubmit = function(e){    
    nome.required = true;    
    surname.required = true;    
    email.required = true;    
    username.required = true;
    pass.required = true;
   
    if (nome.value === ""){
        let name = document.getElementsByName('name')[0]
        let divErro = document.createElement('div')
        let pErro = document.createElement('p')
        divErro.appendChild(pErro)
        pErro.innerText = "Campo nome precisa ser preenchido para realizar o cadastro"
        formCad.appendChild(divErro)    
    }
    e.preventDefault();
}

