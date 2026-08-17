# Orquestrador de Robôs RPA

Trabalho de Conclusão de Curso (TCC) — aplicação web (front-end) para orquestração
de robôs de RPA (Robotic Process Automation): cadastro de robôs, execuções,
agendamentos e monitoramento centralizado.

Esta pasta contém **apenas o front-end**. A API vive em [`../api`](../api), como
um projeto separado e independente.

## Stack

- [Angular](https://angular.dev) 20 (standalone components)
- [Angular Material](https://material.angular.io)
- ESLint via [angular-eslint](https://github.com/angular-eslint/angular-eslint)

## Como rodar

```bash
npm install
npm start
```

A aplicação sobe em `http://localhost:4200`. A tela inicial mostra o status da
conexão com a API (`GET /health`) — como a API ainda não existe, o status
esperado por enquanto é "API indisponível".

## Conexão com a API

O front-end já está preparado para consumir uma API REST externa:

- URL base configurável em [`src/environments/environment.ts`](src/environments/environment.ts)
  e [`environment.development.ts`](src/environments/environment.development.ts) (chave `apiUrl`,
  padrão `http://localhost:3000/api`)
- Serviço genérico de HTTP: [`src/app/core/services/api.ts`](src/app/core/services/api.ts)
  (`get`/`post`/`put`/`delete` usando `apiUrl` como base)
- Serviço de exemplo (health check): [`src/app/core/services/health.ts`](src/app/core/services/health.ts),
  usado em [`src/app/pages/home/home.ts`](src/app/pages/home/home.ts) para exibir o status da API

Quando a API estiver pronta, basta ajustar a `apiUrl` conforme o ambiente — o
mínimo esperado é um endpoint `GET /health` respondendo `200 OK`.

## Estado atual

- [x] Scaffold do projeto Angular com Material, roteamento e lint (angular-eslint)
- [x] Camada de serviços HTTP pronta para conectar com a API
- [ ] Telas de Robôs, Execuções, Agendamentos e Login (a definir)

## Comandos úteis do Angular CLI

```bash
ng generate component nome-do-componente   # gerar um novo componente
ng build                                   # build de produção (saída em dist/)
ng test                                    # rodar testes unitários (Karma)
```

Para a lista completa de schematics e comandos, veja a
[documentação do Angular CLI](https://angular.dev/tools/cli).
