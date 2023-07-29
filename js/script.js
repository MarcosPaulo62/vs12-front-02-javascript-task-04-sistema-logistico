const veiculos = [
  {
    id: 0,
    capacidade: 1000,
    custoPorKm: 60
  },
  {
    id: 1,
    capacidade: 500,
    custoPorKm: 30
  },
  {
    id: 2,
    capacidade: 750,
    custoPorKm: 45
  },
];

const encomendas = [];

function cadastrarEncomenda() {
  let peso = parseFloat(document.getElementById('pesoMax').value);
  let destino = document.getElementById('destino').value;

  encomendas.push({id: encomendas.length ,peso: peso, destino: destino});

  console.log(encomendas)
}

function otimizarEntregas(){
  
}