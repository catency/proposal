# 💅 Componentes & Estilos

O Proposal utiliza os seguintes padrões de código:

## Nomenclatura

O projeto segue os seguintes padrões de nomenclatura:

- `kebab-case`: Para nome de arquivos;
- `PascalCase`: Para nome de componentes, interfaces e tipos;
- `camelCase`: Para nome de variáveis, funções e *custom hooks*;
- `SCREAMING_SNAKE_CASE`: Para constantes e dados estáticos.

## Formatação

A formatação e organização do código é controlada com o ESLint e Prettier. Sendo ambos executados a cada commit realizado.

## Estilos

Este projeto usa 2 tecnologias para estilização que funcionam lado a lado:

1. [TailwindCSS](https://tailwindcss.com/)
2. [Shadcn/ui](https://ui.shadcn.com/)

**Nota**: Shadcn/ui consiste em uma biblioteca de componentes criada sobre [Radix UI](https://www.radix-ui.com/) e Tailwind CSS.

## Regions

Nesta base de código utilizamos a diretiva `#regions`, elas servem para agrupar blocos de código, melhorando a organização e legibilidade do código.

Vejamos um exemplo desta diretiva:

```tsx
// #region Validation Methods

function validateNameSize(name: string): boolean {
  return name.length > 3;
}

function validateEmail(email: string): boolean {
  return email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
}

// #endregion
```

## Componentes

O código dos componentes em React são organizados da seguinte forma:

```tsx
// 1. Imports
import * as React from "react";

import { SOME_STATIC_DATA } from '@/constants/some_data.json';

// 1.1. Interface & Types
interface IPost { ... }
type PostInfo = { ... }

// 1.2. Constants
const DATA = [...SOME_STATIC_DATA]

// 2. Component
export function Component({ ... }: { ... }): JSX.Element {
  // 3. States (useStates, useMemos, constants, etc.)
  const [post, setPost] = useState<IPost>({} as IPost);

  const someData = DATA;

  // 3.1. Hooks
  const { something } = useSomething();

  // 3.2. Handlers
  function handleChange() {}
  function onSubmit() {}

  // 3.3 Getters
  function getPost() {}

  // 3.4 Renders
  function renderAvailablePosts() {}

  // 3.5 Others
  function doSomething() {}

  // 3.6 Effects
  useEffect(() => {}, []);

  // 3.7 Return
  return (
    <main>
      ...
    </main>
  );
}
```