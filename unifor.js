function blackSwitch() {
    let buttonValue = $('#slider').attr('value');
    if(buttonValue == 0){
        $('.secondNav').css({ "background-color": "#000"});
        $('.secondNav img').attr('src', './assets/uniforblack.png');
        $('.backgroundWrapper').css({ "background": "black","color": "white"});
        $('#slider').attr('value','1');
    
    }
    else if(buttonValue == 1){
        $('.secondNav').css({ "background-color": "#fff"});
        $('.secondNav img').attr('src', './assets/unifor-online-azul.svg');
        $('.backgroundWrapper').css({ "background": "#fff","color": "#000"});
        $('#slider').attr('value','0');
    }
    
    
}

function login(){
   let login = $('#insertMat').val();
   let senha = $('#insertPass').val();
   let usuConfirm = false;
   let senhaConfirm = false;

   usuarios.forEach(item => {
    if(login == item.Login){
        usuConfirm = true;
        
    }

    if(senha == item.Senha){
        senhaConfirm = true;
    }

    if(senhaConfirm && usuConfirm){
        $(location).attr('href', 'file:///C:/Users/kenne/Desktop/Projetos/Unifor-login/login.html?id=' + item.Id );       
    }
    
   });


}