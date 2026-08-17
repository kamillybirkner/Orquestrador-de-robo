# API — Orquestrador de Robôs RPA

Este diretório vai concentrar o backend (API) do orquestrador de robôs RPA.
**Ainda não foi implementado** — este README serve apenas como ponto de partida
para quando o desenvolvimento da API começar.

## Contrato mínimo esperado pelo front-end

O front-end (pasta [`../web`](../web)) já está preparado para consumir esta API
através de `environment.apiUrl` (por padrão `http://localhost:3000/api`). Para a
tela inicial já funcionar de ponta a ponta, a API deve expor, no mínimo:

- `GET /health` → `200 OK` (usado pelo front para checar se a API está no ar)

## Sugestões de stack

Ainda em aberto. Alguns candidatos comuns para orquestradores de RPA:

- **Node.js** (NestJS ou Express) + TypeScript — mesma linguagem do front, fácil de compartilhar tipos/DTOs
- **Java** (Spring Boot) — comum em TCCs e ambientes corporativos
- **.NET** (ASP.NET Core) — boa opção se a orquestração for de RPA no ecossistema Windows

## Próximos passos

- Definir a stack e inicializar o projeto aqui dentro
- Modelar entidades: Robô, Execução, Agendamento, Usuário
- Expor `GET /health` para validar a conexão com o front
- Definir autenticação (ex: JWT) quando a tela de login for criada no front
