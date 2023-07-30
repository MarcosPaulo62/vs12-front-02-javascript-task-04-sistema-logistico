const veiculos = [
  {
    id: 1,
    capacidade: 500,
    custoPorKm: 5,
    encomendas: []
  },
  {
    id: 2,
    capacidade: 700,
    custoPorKm: 7,
    encomendas: []
  },
  {
    id: 3,
    capacidade: 1000,
    custoPorKm: 10,
    encomendas: []
  },
];

const encomendas = [];

const rotas = [];

function cadastrarEncomenda() {
  let peso = parseFloat(document.getElementById('pesoMax').value);
  let destino = document.getElementById('destino').value;

  let entrega = {};

  switch(destino){
    case '1':
      entrega = {cidade: 'Porto Alegre', distancia: 10};
      break;
    case '2':
      entrega = {cidade: 'São Paulo', distancia: 30};
      break;
    case '3':
      entrega = {cidade: 'Recife', distancia: 50};
      break;
    case '4':
      entrega = {cidade: 'Rio de Janeiro', distancia: 35};
      break;
    case '5':
      entrega = {cidade: 'Salvador', distancia: 100};
      break;
  }

  encomendas.push({id: encomendas.length ,peso: peso, destino: entrega});
}

function otimizarEntregas(){

  function compararDistancia(cidade1, cidade2){
    return cidade2.destino.distancia - cidade1.destino.distancia;
  }

  encomendas.sort(compararDistancia); // encomendas ordenadas por cidade mais distante

  function compararCarros(carro1, carro2){
    return carro1.custoPorKm - carro2.custoPorKm;
  }

  veiculos.sort(compararCarros); // veiculos ordenados por menor custo

  
  for (const carro of veiculos) {
    let i = 0; // Índice para acompanhar a posição da encomenda no array
  
    while (i < encomendas.length) {
      const item = encomendas[i];
  
      if (carro.capacidade >= item.peso) {
        carro.capacidade -= item.peso;
        carro.encomendas.push(item);
        encomendas.splice(i, 1); // Removendo a encomenda do array
      } else {
        i++;
      }
    }
  }

  for(carro of veiculos){
    let idCarro = carro.id;
    let idEncomendas = [];
    let maiorDistancia;

    for (let i = carro.encomendas.length - 1; i >= 0; i--){
      idEncomendas.push(carro.encomendas[i].id);
      maiorDistancia = carro.encomendas[0].destino.distancia;
    }
    
    let distanciaTotal = maiorDistancia * 2;

    let custoTotal = distanciaTotal * carro.custoPorKm;

    rotas.push({idCarro: idCarro, idEncomendas: idEncomendas, distanciaTotal: distanciaTotal, custoTotal: custoTotal});
  }

  console.log(rotas);
  console.log(encomendas);

  let saida = '';

  for(rota of rotas){
    if (!isNaN(rota.custoTotal)){
      saida += `ID do veículo: ${rota.idCarro}
      ID encomendas alocadas: ${rota.idEncomendas}
      Distância total: ${rota.distanciaTotal} KM
      Custo total: R$${rota.custoTotal} \n\n`;
    }
    
  }
  
  document.getElementById('resultado').innerText = saida;
  
}