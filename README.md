
# Slaca 2019

Este projeto foi desenvolvido como parte de meus estudos sobre Angular, TypeScript e testes com Cypress. O objetivo foi criar um site funcional para o evento **SLACA 2019** (Simpósio Latino Americano de Ciência de Alimentos) enquanto explorava boas práticas de desenvolvimento web e testes automatizados.

## Tecnologias Utilizadas

- **Angular**
- **TypeScript**
- **Cypress**

## Funcionalidades

- Página principal com informações sobre o evento
- Seção para submissão de trabalhos científicos
- Agenda de palestras e workshops
- Cadastro e login para usuários
- Integração com API para exibir os detalhes dos eventos

## Estrutura do Projeto

A estrutura do projeto segue o padrão comum de aplicações Angular, com componentes organizados em módulos, serviços para comunicação com APIs e testes automatizados utilizando Cypress.

### Testes Automatizados

Este projeto utiliza **Cypress** para realizar testes de ponta a ponta. Os testes cobrem funcionalidades críticas como login, submissão de trabalhos e navegação entre páginas.

## Como rodar

Dependências:

- Node/npm
- Cypress

Rode o seguinte comando para instalar o ambiente:

```bash
npm install
```

Para rodar os testes, rode o seguinte comando:

```bash
npm run test
```

Para desenvolver, rode os seguintes comandos:

Para ligar o ambiente:

```bash
ng serve
```

Para rodar a UI de testes:

```bash
npx cypress open --env type=base
```

---

Desenvolvido por Willer Lucoles para fins de aprendizado e aprimoramento em parceria com Chuva-ink.
