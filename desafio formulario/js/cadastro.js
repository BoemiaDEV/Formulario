function validacao(){
    let senha = document.getElementById("i_senha");
    let con_senha = document.getElementById("i_conSenha");
    input_style(senha, "#f45656", "#008000");
    input_style(con_senha, "#f45656", "#008000");
}

function input_style(input, cor_1, cor_2){

    if(!input.checkValidity()){
        return input.style.border = `3px solid ${cor_1}`;
    }else{
        return input.style.border = `3px solid ${cor_2}`;
    }

}