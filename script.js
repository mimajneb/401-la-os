// let nomeCapivara = "jureusko";

// let contador = 0;

// while(contador<3){
//     console.log(nomeCapivara);
//     contador ++;
// }

// for(let contador=0; contador<4; contador++){
//     console.log(contador);
//     console.log("rabanete");
// }

// let ListaChamada = ["Diego Maldonado", "Roberta Messi", "Carla Ferrer", "Thomas Campo Salles", "Pedro Costa", "Alice Albuquerque"];

// for(let contador = 0; contador<ListaChamada.length; contador++){
//     console.log(ListaChamada [contador]);
//  }
let idade = Number(prompt("Digite sua idade"));

let filmes = [
    {nome:"Rei Leão", classificação: 12, estilo: "animação"},
    {nome:"Vingadores", classificação: 16, estilo:"explosão"},
    {nome: "KillBill", classificação: 18, estilo:"muito sangue"},
    {nome: "0 iluminado", classificação: 16, estilo:"perturbador"},
    {nome: "Tropa de Elite", classificação: 18, estilo:"sangue e tapa na cara"}
]
for(let filme of filmes){
    if(idade >= filme.classificação){
        console.log(filme.nome);
    }
}