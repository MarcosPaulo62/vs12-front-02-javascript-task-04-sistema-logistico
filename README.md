# Sistema Logistico em Js - CodingDojo

## Sistema de Logística → criar uma interface para execução deste programa. 
  - Use o Bootstrap (sugestão) para fazer a estilização e observe com cuidado a navegação.

### Uma empresa de logística deseja otimizar as rotas de entrega de suas encomendas para minimizar o tempo de entrega e os custos operacionais. A empresa possui uma frota de veículos de diferentes capacidades e um conjunto de encomendas a serem entregues em diferentes destinos.
  - Cada veículo possui uma capacidade máxima de carga, medida em peso, e um custo operacional por quilômetro percorrido. Cada encomenda possui um peso e uma localização de destino.
  - O objetivo é encontrar a combinação ideal de veículos e suas respectivas rotas para entregar todas as encomendas de forma eficiente, levando em consideração a capacidade máxima de carga dos veículos e a distância total percorrida.
- O algoritmo proposto deve seguir as seguintes etapas:
  - Etapa 1: Preparação dos Dados
    - O algoritmo deve receber como entrada um array de objetos, onde cada objeto representa uma encomenda com as seguintes propriedades:
    - id: O identificador único da encomenda.
    - peso: O peso da encomenda em quilogramas.
    - destino: O local de destino da encomenda (por simplicidade, pode ser representado como um objeto com as propriedades latitude e longitude).
    - Além disso, o algoritmo deve receber um array de objetos, onde cada objeto representa um veículo com as seguintes propriedades:
      - id: O identificador único do veículo.
      - capacidade: A capacidade máxima de carga do veículo em quilogramas.
      - custoPorKm: O custo operacional do veículo por quilômetro percorrido.
  - Etapa 2: Implementação do Algoritmo
    - O algoritmo deve encontrar a combinação ideal de veículos e suas rotas de entrega que minimizem o tempo total de entrega e os custos operacionais. Para isso, você deve implementar um algoritmo que utiliza técnicas de otimização combinatória, como a busca exaustiva ou algoritmos genéticos.
    - O algoritmo deve ser capaz de dividir as encomendas entre os veículos de forma a otimizar o uso da capacidade máxima de carga de cada veículo, evitando a sobrecarga e a necessidade de viagens desnecessárias. Além disso, deve calcular as rotas de entrega para cada veículo, considerando a distância entre os destinos das encomendas e o custo operacional de cada veículo.
  - Etapa 3: Saída do Algoritmo
    - O algoritmo deve retornar um objeto com as seguintes informações:
      - rotas: Um array de objetos, onde cada objeto representa a rota de entrega de um veículo. Cada objeto deve conter:
      - veiculo: O identificador único do veículo.
      - encomendas: Um array contendo os identificadores únicos das encomendas entregues na rota.
      - distanciaTotal: A distância total percorrida na rota em quilômetros.
      - custoTotal: O custo operacional total da rota.
      - encomendasNaoEntregues: Um array contendo os identificadores únicos das encomendas que não puderam ser entregues devido à capacidade máxima de carga dos veículos.

