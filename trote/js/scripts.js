function equipeSelecionada(){
    console.log('teset  ')
    const equipe = document.getElementById('equipe').value
    const body = document.getElementById('calculadoras')
    
    if(equipe == 'Laranja'){
        body.className = ''
        body.classList.add(`background-laranja`)
    }else if(equipe == 'Preta'){
        body.className = ''
        body.classList.add(`background-preto`)
    }else if(equipe == 'Roxa'){
        body.className = ''
        body.classList.add(`background-roxo`)
    }else if(equipe == 'Verde'){
        body.className = ''
        body.classList.add(`background-verde`)
    }else if(equipe == 'Vermelha'){
        body.className = ''
        body.classList.add(`background-vermelha`)
    }else{
        body.className = ''
    }
}
let testeAtual = 0
function prosseguir(event){
    event.preventDefault();
    const campos = document.querySelectorAll('.campos')
    
    if (testeAtual < campos.length - 1){
        campos[testeAtual].classList.remove('d-flex')
        campos[testeAtual].classList.add('d-none')
        testeAtual ++
        campos[testeAtual].classList.remove('d-none')
        campos[testeAtual].classList.add('d-flex')
        if(testeAtual === 7){
            document.querySelector('.prosseguir').classList.add('d-none')
        }else if(testeAtual === 8){
            document.getElementById('retorno').classList.remove('d-none')
        }
    }


}


function calcular() {
    //vamos criar duas variaveis 
    //js as variaveis não possuem tipo
    
    let mascote, homenagem, leite, kit, suplemento, soma, equipe, sangue;
    
    mascote = Number(document.getElementById('mascote').value);
    homenagem = Number(document.getElementById('homenagem').value);
    leite = Number(document.getElementById('leite').value);
    kit = Number(document.getElementById('kit').value);
    suplemento = Number(document.getElementById('suplemento').value);
    sangue = Number(document.getElementById('sangue').value);
    
    //Soma parcial
    soma = mascote + homenagem + ((leite)* 2)    

    equipe = document.getElementById('equipe').value
    
    if(equipe === 'Laranja'){
        if(kit >= 97 && suplemento >= 49){
            soma += 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
        }else if (kit >= 78 && suplemento >= 39){
            soma += 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15)
        }else if(kit >= 49 && suplemento >= 25){ 
            soma += 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15)
        }else if(kit >= 19 && suplemento >= 10){
            soma += 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15)
        }

        if(sangue > 49){
            soma = soma + 2500 + (sangue - 49) * 20
        }else{
            soma = soma + (sangue * 20)
        }

    }else if(equipe === 'Preta'){
        if(kit >= 103 && suplemento >= 52){
            soma += 5000 + ((kit - 103) * 30) + ((suplemento - 52) * 15)
        }else if (kit >= 82 && suplemento >= 42){
            soma += 4000 + ((kit - 82) * 30) + ((suplemento - 42) * 15)
        }else if(kit >= 52 && suplemento >= 26){ 
            soma += 2500 + ((kit - 52) * 30) + ((suplemento - 26) * 15)
        }else if(kit >= 21 && suplemento >= 10){
            soma += 1000 + ((kit - 21) * 30) + ((suplemento - 10) * 15)
        }


        if(sangue > 52){
            soma = soma + 2500 + (sangue - 52) * 20
        }else{
            soma = soma + (sangue * 20)
        }

    }else if(equipe === 'Roxa'){
        if(kit >= 102 && suplemento >= 51){
            soma += 5000 + ((kit - 102) * 30) + ((suplemento - 51) * 15)
        }else if (kit >= 82 && suplemento >= 41){
            soma += 4000 + ((kit - 82) * 30) + ((suplemento - 41) * 15)
        }else if(kit >= 51 && suplemento >= 26){ 
            soma += 2500 + ((kit - 51) * 30) + ((suplemento - 26) * 15)
        }else if(kit >= 18 && suplemento >= 10){
            soma += 1000 + ((kit - 18) * 30) + ((suplemento - 10) * 15)
        }

        if(sangue > 51){
            soma = soma + 2500 + (sangue - 51) * 20
        }else{
            soma = soma + (sangue * 20)
        }

    }else if(equipe === 'Verde'){
        if(kit >= 88 && suplemento >= 44){
            soma += 5000 + ((kit - 88) * 30) + ((suplemento - 44) * 15)
        }else if (kit >= 70 && suplemento >= 35){
            soma += 4000 + ((kit - 70) * 30) + ((suplemento - 35) * 15)
        }else if(kit >= 44 && suplemento >= 22){ 
            soma += 2500 + ((kit - 44) * 30) + ((suplemento - 22) * 15)
        }else if(kit >= 18 && suplemento >= 9){
            soma += 1000 + ((kit - 18) * 30) + ((suplemento - 9) * 15)
        }

        if(sangue > 44){
            soma = soma + 2500 + (sangue - 44) * 20
        }else{
            soma = soma + (sangue * 20)
        }
    }else{
        if(kit >= 93 && suplemento >= 47){
            soma += 5000 + ((kit - 93) * 30) + ((suplemento - 47) * 15)
        }else if (kit >= 74 && suplemento >= 35){
            soma += 4000 + ((kit - 74) * 30) + ((suplemento - 35) * 15)
        }else if(kit >= 47 && suplemento >= 24){ 
            soma += 2500 + ((kit - 47) * 30) + ((suplemento - 24) * 15)
        }else if(kit >= 19 && suplemento >= 9){
            soma += 1000 + ((kit - 19) * 30) + ((suplemento - 9) * 15)
        }

        if(sangue > 47){
            soma = soma + 2500 + (sangue - 47) * 20
        }else{
            soma = soma + (sangue * 20)
        }
    }
    
    document.getElementById("soma").innerHTML = `O RESULTADO FINAL FOI:  <br>${soma}`;
    prosseguir(event)

}


//Flipar a pagina
const paginas = document.querySelectorAll('.paginas');
let paginaAtual = 0;

// Ajustar z-index inicial (topo -> fundo)
paginas.forEach((pagina, index) => {
  pagina.style.zIndex = paginas.length - index;
});

function proximaPagina() {
  if (paginaAtual < paginas.length - 1) {
    paginas[paginaAtual].classList.add('flipar');
    paginaAtual++;
  }
}

function paginaAnterior() {
  if (paginaAtual > 0) {
    paginaAtual--;
    paginas[paginaAtual].classList.remove('flipar');
  }
}

