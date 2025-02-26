function seguirPerfil(){
    alert('Voce chegou no JS')
    const buttonSeguir = document.getElementById('seguir');
    if(buttonSeguir.innerHTML === 'Seguir perfil'){
        buttonSeguir.innerHTML = 'Você está seguindo este perfil';
        buttonSeguir.classList.add('buttonAcionado')
    }else{
        buttonSeguir.classList.remove('buttonAcionado')
        buttonSeguir.innerHTML = 'Seguir perfil'
    }

}