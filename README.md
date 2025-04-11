# Resumo do Projeto

O projeto consistiu em desenvolver uma tela de login simples utilizando HTML e JavaScript, com foco na criação de uma interface funcional para autenticação de usuário. Os requisitos incluíam:

- **Interface de Login:**
  - Campo para inserir o nome de usuário.
  - Campo para inserir a senha.
  - Botão de "Entrar" que, ao ser clicado, realiza a validação dos campos.
  - Mensagens de erro caso os campos estejam vazios ou preenchidos incorretamente.
  - Link para "Esqueci minha senha" (sem funcionalidade completa).

- **Funcionalidade com JavaScript:**
  - Validação dos campos de entrada.
  - Simulação de login comparando os valores inseridos com dados predefinidos (usuário: `admin`, senha: `1234`).
  - Exibição de mensagem de sucesso ou erro conforme o resultado da validação.

- **Versionamento no GitHub:**
  - Criação de um repositório para o projeto.
  - Uso de commits frequentes e organização por branches.
  - Integração de alterações por meio de pull requests.
  - Relatório detalhando os desafios e soluções encontrados durante o desenvolvimento.

---

# Relatório de Desafios

Durante o desenvolvimento do projeto, os desafios encontrados foram os seguintes:

- **Desenvolvimento Solo:**
  - Por ter realizado a tarefa sozinho, não houve conflitos de integração ou problemas típicos de colaboração.

- **Gestão de Branches:**
  - Um problema específico ocorreu quando parte do código foi acidentalmente enviado para a branch `main` em vez da branch de teste. Essa situação exigiu uma reversão do commit para manter a organização do versionamento.

## Lições Aprendidas

- **Atenção ao Gerenciamento de Branches:**
  - É fundamental verificar a branch ativa antes de realizar o commit ou push para evitar que código experimental seja incorporado à branch principal.

- **Boas Práticas de Commit:**
  - Mesmo em projetos individuais, manter uma rotina de commits claros e organizados é essencial para o controle de versões e a rastreabilidade das alterações.

- **Importância dos Testes de Integração:**
  - Testar a integração do código mesmo em desenvolvimento solo pode ajudar a identificar problemas rapidamente e evitar retrabalho.

Esta experiência reforçou a importância de seguir as boas práticas de versionamento e a atenção aos detalhes durante o gerenciamento de branches, garantindo a qualidade e a organização do código ao longo do desenvolvimento.

---

# Testes Unitários (em Portugol)

A seguir, encontram-se os testes unitários em pseudocódigo, utilizando a sintaxe em Portugol, para validar as operações matemáticas:

## Testes para a Operação de Soma

```portugol
funcao soma(a, b)
    retorna a + b
fimfuncao

procedimento testaSoma()
    se (soma(5, 3) <> 8) entao
        escreva("Erro: soma(5,3) deveria retornar 8")
    fimse
    se (soma(-5, -3) <> -8) entao
        escreva("Erro: soma(-5,-3) deveria retornar -8")
    fimse
    se (soma(0, 0) <> 0) entao
        escreva("Erro: soma(0,0) deveria retornar 0")
    fimse
fimprocedimento
```

## Testes para a Operação de Subtração

```portugol
funcao subtracao(a, b)
    retorna a - b
fimfuncao

procedimento testaSubtracao()
    se (subtracao(10, 4) <> 6) entao
        escreva("Erro: subtracao(10,4) deveria retornar 6")
    fimse
    se (subtracao(5, -3) <> 8) entao
        escreva("Erro: subtracao(5,-3) deveria retornar 8")
    fimse
    se (subtracao(-5, -3) <> -2) entao
        escreva("Erro: subtracao(-5,-3) deveria retornar -2")
    fimse
fimprocedimento
```

## Testes para a Operação de Multiplicação

```portugol
funcao multiplicacao(a, b)
    retorna a * b
fimfuncao

procedimento testaMultiplicacao()
    se (multiplicacao(4, 3) <> 12) entao
        escreva("Erro: multiplicacao(4,3) deveria retornar 12")
    fimse
    se (multiplicacao(-4, -3) <> 12) entao
        escreva("Erro: multiplicacao(-4,-3) deveria retornar 12")
    fimse
    se (multiplicacao(5, 0) <> 0) entao
        escreva("Erro: multiplicacao(5,0) deveria retornar 0")
    fimse
fimprocedimento
```

## Testes para a Operação de Divisão

```portugol
funcao divisao(a, b)
    se (b = 0) entao
        retorne "Erro: Não é possível dividir por zero"
    senao
        retorne a / b
    fimse
fimfuncao

procedimento testaDivisao()
    se (divisao(10, 2) <> 5) entao
        escreva("Erro: divisao(10,2) deveria retornar 5")
    fimse
    se (divisao(-10, -2) <> 5) entao
        escreva("Erro: divisao(-10,-2) deveria retornar 5")
    fimse
    se (divisao(10, 0) <> "Erro: Não é possível dividir por zero") entao
        escreva("Erro: divisao(10,0) deveria retornar mensagem de erro para divisão por zero")
    fimse
fimprocedimento
```
