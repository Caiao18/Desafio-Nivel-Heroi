//DESAFIO DO HEROI
let nomeHeroi = "Thor";
let xpDoHeroi = 9500;
let nivelDoHeroi = "";

if (xpDoHeroi < 1000){
    nivelDoHeroi = "ferro";
    }else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000){
        nivelDoHeroi = "Bronze";
    }else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000){
        nivelDoHeroi = "Prata";
    }else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000){
        nivelDoHeroi = "Ouro";
    }else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000){
        nivelDoHeroi = "Platina";
    }else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000){
        nivelDoHeroi = "Ascendente";
    }else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000){
        nivelDoHeroi = "Imortal";
    }else if (xpDoHeroii >= 10001) {
        nivelDoHeroi = "Radiante";
      }
  

      console.log("O nome do Heroi é " + nomeHeroi);
      console.log("E seu Nivel é " + nivelDoHeroi);