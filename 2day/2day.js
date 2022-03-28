const nome = prompt('Qual seu nome?');
const idade = prompt('Qual sua idade?');
const linguagem = prompt('Qual linguagem de programação você está estudando?');

const msg = `olá ${nome}, você tem ${idade} anos e está estudando ${linguagem}`;

alert(msg);

const gosto = prompt(`Você gosta de estudar ${linguagem} ? Responda com o número 1 para SIM ou 2 para NÃO.`);
if (gosto == 1) {
  alert('Muito bom! Continue estudando e você terá muito sucesso.');
} 
if (gosto == 2) {
  alert('Ahh que pena... Já tentou aprender outras linguagens? O importante é aprender!');
}