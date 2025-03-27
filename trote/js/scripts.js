function calcular() {
    //vamos criar duas variaveis 
    //js as variaveis não possuem tipo 

    alert('Sucess, link realizado com sucesso')
    
    let mascote, homenagem;
    
    mascote = document.getElementById('mascote').value
    homenagem = document.getElementById('homenagem').value
    
    console.log(mascote)
    console.log(homenagem)
    
    let soma;

    soma = Number(mascote) + Number(homenagem)

    console.log(soma)
}