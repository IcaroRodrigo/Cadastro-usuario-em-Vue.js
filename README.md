# Cadastro-usuario-em-Vue.js
Teste prático para programador Front-end, realizei esse teste para fins didáticos utilizando o framework Vue.js


Regras impostas no desafio.

Regras do layout:
As caixas de inputs deveram ter a altura de 45px,

A caixa do corpo de conteúdo e cadastro deve ter uma largura de 440px.

A caixa do corpo de conteúdo e cadastro deve está centralizada no meio da página.

O Layout deve ser responsivo, portanto os inputs devem ficar com a largura de 100% quando atingir o padrão de dispositivo mobile.

Nos inputs você deve usar máscaras para o CPF (EX: 000.000.000-00) e telefone (EX: (00) 00000-0000, (00) 0000-0000).

Consuma a api de CEPs para buscar a validação do endereço. API para busca de CEP: https://viacep.com.br/ws/{{CEP}}/json/ Você deve criar um metodo para quando receber os dados da API "autopreencher" os campos de cidade, bairro e logradouro.

Use caixinhas em vermelho (Modal ou snackbar) para printar os erros para o usuário.

Ao Cadastrar usar uma caixa (Modal) para exibir o sucesso do cadastro e ao clicar em "ok" a pessoa será redirecionada para a página de exibição.

Você deve validar os inputs obrigatórios e também validar a sequência do CPF.

Os inputs (CPF, CEP e Número) devem aceitar somente números, não poderá aceirar letras.
