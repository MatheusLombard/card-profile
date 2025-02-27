function seguirPerfil(){
    const buttonSeguir = document.getElementById('seguir');
    if(buttonSeguir.innerHTML === 'Seguir Perfil'){
        buttonSeguir.innerHTML = 'Você está seguindo este perfil';
        buttonSeguir.classList.add('buttonAcionado')
    }else{
        buttonSeguir.classList.remove('buttonAcionado')
        buttonSeguir.innerHTML = 'Seguir Perfil'
    }

}