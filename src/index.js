// Desafio Classificador de nível de Herói

// 1. Variáveis para armazenar o nome e a XP do herói
let nome = "Super Dev";
let xp = Math.floor(Math.random() * (12001));
let nivel;


// 2. Estrutura de decisão para classificar o nível do herói
if (xp <= 1000) {
    nivel = "Ferro";
} else if (xp > 1000 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp > 2000 && xp <= 4000) {
    nivel = "Prata";
} else if (xp > 4000 && xp <= 6000) {
    nivel = "Ouro";
} else if (xp > 6000 && xp <= 7000) {
    nivel = "Platina";
} else if (xp > 7000 && xp <= 8000) {
    nivel = "Diamante";
} else if (xp > 8000 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp > 9000 && xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// 3. Exibir a mensagem final
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);