# Desafio-Acelera-Dev
Codigo para o desafio AceleraDev da codenation - criptografia de julio cesar


## primeira versão - 99 pontos ##
Metodologia:
Utilizando a linguagem javascript, crio uma requisição para a url informada pelo desafiante, onde recebo um json contendo uma frase cifrada
que utiliza a criptografia de julio cesar, e a quantidade de posições alteradas (no caso, 5).
Meu programa utiliza interface web simples que pode resolver a questão de qualquer token informado, pois ele realiza os cálculos segundo o 
número de casas recebidas. 

Todo o cálculo feito é hardcoded. E o tempo todo é utilizado uma função sha-1 (da biblioteca sha1-js) para verificar o hash da string e 
garantir sua integridade.

Apesar de alguns pequenos bugs, que são bem conhecidos, é verificado pelo hash que há integridade na string decifrada.

Todos os dados obtidos são colocados manualmente em um arquivo answer.json e enviado manualmente através do software insomnia para a url
informada pelo desafiante. 

Meu objetivo na segunda versão é automatizar este processo.
