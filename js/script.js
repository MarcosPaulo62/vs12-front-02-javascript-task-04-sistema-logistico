const veiculos = [
  {
    id: 3,
    capacidade: 500,
    custoPorKm: 5,
    encomendas: [],
    prontoParaSair: false
  },
  {
    id: 2,
    capacidade: 700,
    custoPorKm: 7,
    encomendas: [],
    prontoParaSair: false
  },
  {
    id: 1,
    capacidade: 1000,
    custoPorKm: 10,
    encomendas: [],
    prontoParaSair: false
  },
];

const encomendas = [];

const rotas = [];

function cadastrarEncomenda() {
  let peso = parseFloat(document.getElementById('pesoMax').value);
  let destino = document.getElementById('destino').value;

  let entrega = {};

  switch (destino) {
    case '1':
      entrega = { cidade: 'Porto Alegre', distancia: 10 };
      break;
    case '2':
      entrega = { cidade: 'São Paulo', distancia: 30 };
      break;
    case '3':
      entrega = { cidade: 'Recife', distancia: 50 };
      break;
    case '4':
      entrega = { cidade: 'Rio de Janeiro', distancia: 35 };
      break;
    case '5':
      entrega = { cidade: 'Salvador', distancia: 100 };
      break;
  }

  encomendas.push({ id: encomendas.length, peso: peso, destino: entrega });

  mostrarAlerta();
}

function mostrarAlerta() {
    const alerta = document.getElementById('alerta');
    alerta.classList.add('show');
  
    setTimeout(() => {
      alerta.classList.remove('show');
    }, 2000);
  }

let cont = 0;

function otimizarEntregas() {
  if (cont > 0){
    alert("Só é possível fazer a simulação uma vez");
    window.location.reload();
  }

  cont++;

  function compararDistancia(cidade1, cidade2) {
    return cidade1.destino.distancia - cidade2.destino.distancia;
  }

  encomendas.sort(compararDistancia); // encomendas ordenadas por cidade mais distante

  function compararCarros(carro1, carro2) {
    return carro2.custoPorKm - carro1.custoPorKm;
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

  for (carro of veiculos) {
    if (carro.capacidade < 80) {
      carro.prontoParaSair = true;
    }
  }

  for (carro of veiculos) {
    let idCarro = carro.id;
    let idEncomendas = [];
    let maiorDistancia;

    for (let i = 0; i <= carro.encomendas.length - 1; i++) {
      idEncomendas.push(carro.encomendas[i].id);
      maiorDistancia = carro.encomendas[i].destino.distancia;
    }

    let distanciaTotal = maiorDistancia * 2;

    let custoTotal = distanciaTotal * carro.custoPorKm;

    rotas.push({ idCarro: idCarro, idEncomendas: idEncomendas, distanciaTotal: distanciaTotal, custoTotal: custoTotal });
  }

  let saida = '';
  let custoVeiculosProntos = [];

  const veiculosProntos = rotas.filter((rota, indice) => {
    return veiculos[rota.idCarro - 1].prontoParaSair == true;
  });

  const veiculosNaoProntos = rotas.filter((rota, indice) => {
    return veiculos[rota.idCarro - 1].prontoParaSair == false;
  });

  for (carro of veiculosProntos) {
    saida += `ID do veículo: ${carro.idCarro}
    ID encomendas alocadas: ${carro.idEncomendas}
    Distância total: ${carro.distanciaTotal} KM
    Custo total: ${carro.custoTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} \n\n`;
    custoVeiculosProntos.push(carro.custoTotal);
  }

  for (carro of veiculosNaoProntos) {
    if (carro.idEncomendas.length > 0) {
      saida += `ID do veículo: ${carro.idCarro}
      Veículo não atingiu carga mínima
      Encomendas alocadas: ${carro.idEncomendas}\n\n`;
    } else {
      saida += `ID do veículo: ${carro.idCarro}
      Veículo não atingiu carga mínima\n\n`;
    }
  }

  const custoTotalFrota = custoVeiculosProntos.reduce((acum, custo) => acum + custo, 0);

  saida += `Custo total da frota: ${custoTotalFrota.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}\n\n`;

  function incluirSaida(item){
    saida += item.id + ',';
  }

  if (encomendas.length > 0) {
    saida += `ID das encomendas não entregues: `;
    encomendas.forEach(incluirSaida);
  }

  document.getElementById('resultado').innerText = saida;
}