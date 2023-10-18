let vitorias = 60
let derrotas = 10

let resultado = calcularSaldoRankeadas(60,10)

function calcularSaldoRankeadas(vitorias, derrotas){
let saldo = 60 - 10


if (saldo <= 10){
	return "Ferro";
}

else if (saldo <= 20){
	return "Bronze";
}

else if (saldo <= 50){
  return "Prata";
}

else if (saldo <= 80){
  return "Ouro";
}

else if (saldo <= 90){
	return "Diamante";
}

else if (saldo <= 100){
	return "Lendário";
}

else if (saldo >= 101){
	return "Imortal";
}

}

console.log("O Herói tem de saldo " + vitorias, " vitórias e está no nível " + resultado )
