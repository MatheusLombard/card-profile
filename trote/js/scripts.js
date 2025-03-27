function calcular() {
    //vamos criar duas variaveis 
    //js as variaveis não possuem tipo
    
    let mascote, homenagem, leite, kitAvulso, suplementoAvulso;
    
    mascote = document.getElementById('mascote').value
    homenagem = document.getElementById('homenagem').value
    leite = document.getElementById('leite').value
    kitAvulso = document.getElementById('kitAvulso').value
    suplementoAvulso = document.getElementById('suplementoAvulso').value
    
    let soma;

    soma = Number(mascote) + Number(homenagem) + (Number(leite)* 2) + (Number(kitAvulso) * 30) + (Number(suplementoAvulso) * 15)

    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}