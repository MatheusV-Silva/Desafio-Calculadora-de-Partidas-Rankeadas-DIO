//Função que calcula o soldo de vitorias
function calcularSaldoVitorias(vitorias, derrotas){
    return vitorias-derrotas
}

//Função que calcula o nível do Herói
function nivelHeroi(saldo){
    if(saldo<=10){
        return 'Ferro'
    }
    else if(saldo>10 && saldo<=20){
        return 'Bronze'
    }
    else if(saldo>20 && saldo<=50){
        return 'Prata'
    }
    else if(saldo>50 && saldo<=80){
        return 'Ouro'
    }
    else if(saldo>80 && saldo<=90){
        return 'Diamante'
    }
    else if(saldo>90 && saldo<=100){
        return 'Lendário'
    }
    else if(saldo=>101){
        return 'Imortal'
    }
}

//abaixo será o funcionamento do código em si

let saldoVitorias=calcularSaldoVitorias(98,44)
let nivelDoHeroi= nivelHeroi(saldoVitorias)


console.log(`O Herói tem o saldo de ${saldoVitorias} vitórias, está no nível ${nivelDoHeroi} `)