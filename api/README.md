# API — Orquestrador de Robôs RPA

Backend do orquestrador de robôs RPA. Rails 8 no modo `--api` (sem views/assets),
com SQLite como banco de dados.

## Requisitos

- Ruby 3.4 (instalado via [RubyInstaller with DevKit](https://rubyinstaller.org/) no Windows)
- Bundler (`gem install bundler` se necessário)

## Como rodar

```bash
cd api
bundle install
bin/rails db:prepare   # cria/migra o banco (SQLite em storage/)
bin/rails server        # sobe em http://localhost:3000
```

## Contrato com o front-end

O front-end (pasta [`../web`](../web)) consome esta API a partir de
`environment.apiUrl`, por padrão `http://localhost:3000/api`.

- `GET /api/health` → `200 OK`, `{"status":"ok"}` — usado pela tela inicial para
  checar se a API está no ar.

CORS está liberado para `http://localhost:4200` em
[`config/initializers/cors.rb`](config/initializers/cors.rb).

Rails também expõe `GET /up`, o health check padrão do próprio framework (usado
por load balancers/uptime monitors, não pelo front).

## Estrutura relevante

- `app/controllers/api/` — controllers da API (namespace `Api::`)
- `config/routes.rb` — rotas, incluindo o namespace `api`
- `config/initializers/cors.rb` — configuração de CORS

## Próximos passos

- Modelar entidades: Robô, Execução, Agendamento, Usuário
- Definir autenticação (ex: JWT) quando a tela de login for criada no front
- Adicionar testes de request para os novos endpoints
