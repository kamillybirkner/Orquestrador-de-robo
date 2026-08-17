# Orquestrador de Robôs RPA

Trabalho de Conclusão de Curso (TCC) — plataforma web para orquestração de robôs
de RPA (Robotic Process Automation): cadastro de robôs, execuções, agendamentos
e monitoramento centralizado.

## Estrutura do repositório

```
.
├── web/   # Front-end — Angular 20 + Angular Material
└── api/   # Back-end / API — Ruby on Rails 8 (--api)
```

Front e API são projetos independentes, cada um na sua pasta.

## Como rodar

```bash
# API — http://localhost:3000
cd api
bundle install
bin/rails db:prepare
bin/rails server

# Front-end — http://localhost:4200 (em outro terminal)
cd web
npm install
npm start
```

Detalhes de cada parte estão nos respectivos READMEs: [`web/README.md`](web/README.md)
e [`api/README.md`](api/README.md).

## Conexão web ↔ API

O front-end já está pronto para consumir a API assim que ela existir:

- URL base configurável em `web/src/environments/environment.ts` (chave `apiUrl`,
  padrão `http://localhost:3000/api`)
- Serviço genérico de HTTP: `web/src/app/core/services/api.ts`
- Serviço de exemplo (health check): `web/src/app/core/services/health.ts`,
  exibido na tela inicial (`web/src/app/pages/home`)

O contrato mínimo esperado da API está descrito em [`api/README.md`](api/README.md).

## Estado atual

- [x] Scaffold do front-end (Angular + Material, roteamento, lint, services HTTP)
- [x] Scaffold da API (Rails 8 --api, CORS, `GET /api/health`)
- [ ] Telas de Robôs, Execuções, Agendamentos e Login (a definir)
- [ ] Modelagem de dados e autenticação na API
