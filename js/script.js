const veiculos = [
  {
    id: "v1",
    capacidade: 1000,
    custoPorKm: 32.5,
  },
  {
    id: "v2",
    capacidade: 500,
    custoPorKm: 75,
  },
  {
    id: "v3",
    capacidade: 750,
    custoPorKm: 25,
  },
];
const encomendas = [

];

function cadastrarEncomenda() {
  let peso = document.getElementById('pesoMax').value;
  let destino = document.getElementById('destino').value;

  encomendas.push({id: encomendas.length ,peso: peso, destino: destino});

  console.log(encomendas)
}

function otimizarEntregas(veiculos, encomendas){
  
}