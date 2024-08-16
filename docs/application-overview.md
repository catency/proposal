# 💻 Visão Geral da Aplicação

Aqui você encontra uma visão geral técnica da aplicação, como rodá-la e oque é possível realizar no CLI da mesma.

## Começando

Pré-requisitos:

- Node +20.0.0
- PNPM +8.14

Para inicializaar o aplicativo, execute os seguintes comandos:

```bash
git clone https://github.com/catency/proposal.git

cd proposal

npm install

npm run dev
```

### Sumário dos comandos

Aqui estão todos os comandos de CLI que você pode executar neste projeto:

#### `pnpm run dev`

Inicia o aplicativo em modo de desenvolvimento.

#### `pnpm run build`

Builda a aplicação, retornando os arquivos na pasta `/build`.

#### `pnpm run start`

Inicia o build fornecido pelo comando `pnpm run build` em um servidor localmente.

#### `pnpm run n:lint`

Formata o código usando as regras escritas nos arquivos `.eslintrc.json` e `.prettier.config.mjs` por meio do NextJS.

#### `pnpm run p:check`

Verifica o código utilizando as regras escritas em `.prettier.config.mjs`, mostrando possíveis erros de formatação.

#### `pnpm run p:write`

Verifica e corrige erros de formatação do código usando as regras escritas em `.prettier.config.mjs`

#### `pnpm run e:check`

Verifica o código utilizando as regras escritas em `.eslintrc.json`, mostrando possíveis erros de organização.

#### `pnpm run e:lint`

Verifica e corrige erros de organização do código usando as regras escritas em `.eslintrc.json`
