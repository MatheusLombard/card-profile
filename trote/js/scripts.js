function calcular() {
    //vamos criar duas variaveis 
    //js as variaveis não possuem tipo
    
    let mascote, homenagem, leite, kit, suplemento, soma, equipe;
    
    mascote = Number(document.getElementById('mascote').value);
    homenagem = Number(document.getElementById('homenagem').value);
    leite = Number(document.getElementById('leite').value);
    kit = Number(document.getElementById('kit').value);
    suplemento = Number(document.getElementById('suplemento').value);

    //Soma parcial
    soma = mascote + homenagem + ((leite)* 2)  //+ ((suplemento) * 15);
    

    equipe = document.getElementById('equipe').value
    
    if(equipe === 'Laranja'){
        if(kit >= 97){
            soma += 5000 + ((kit - 97) * 30)
        }else if (kit >= 78){
            soma += 4000 + ((kit - 78) * 30)
        }else if(kit >= 49){ 
            soma += 2500 + ((kit - 49) * 30)
        }else if(kit >= 19){
            soma += 1000 + ((kit - 19) * 30)
        }
    }

    document.getElementById("soma").innerHTML = `A soma é ${soma}`;
}