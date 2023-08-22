# Drinking Faster

Aplicação NUXT consumindo a API [TheCocktailDB](https://www.thecocktaildb.com/api.php).

O Intuito foi de apresentar algumas habilidades gerais no frontend.
O projeto se encontra hospedado na Vercel para facilitar visualização.
[Você pode acessar clicando aqui](https://drinking-faster.vercel.app/)

## Instalação

- Clonar este repositório
- navegar até a pasta onde o projeto foi clonado
- baixar as dependências:
```bash
# yarn
yarn install
```

- executar servidor localmente: 
```bash
# yarn
yarn dev -o 
```

- acessar a URL no seu navegador `http://localhost:3000`:

## Requisitos técnicos do projeto

1. Dado que sou um usuário eu quero visualizar as categorias de bebidas
* Ao escolher uma categoria eu devo visualizar a lista das bebidas dessa categoria.

2. Dado que sou um usuário eu quero ver os detalhes da bebida.
* A aplicação deve apresentar a imagem da bebida escolhida;
* A aplicação deve apresentar a instrução da bebida escolhida.

3. Dado que sou um usuário eu quero pesquisar uma bebida específica através de um campo de busca.**(opcional)**

4. Dado que sou um usuário eu posso favoritar uma bebida para facilmente acessá-la no futuro.**(opcional)**

### Obrigatórios

- [x] Criar documentação assertiva para a execução e apresentação do projeto no README;
- [x] Utilizar typescript;
- [x] Criar nome para aplicação;
- [x] Tratamento básicos de erros da API;( 500, 400 )
- [x] Fácil de buildar e executar a aplicação para testes

### Opcionais

- [x] Tratamento para rotas que não existem;
- [x] Aplicação deve ser responsiva;
- [] Escrever testes;

### Diferenciais

- [x] Documentar decisões tomadas durante o desafio técnico.
- [x] Paleta de cores única;
- [x] UX agradável;
- [x] Criar commits semânticos.

## Decisões gerais

### Design

Devido ao requisito número 1 e 1.1, a escolha do menu lateral para listar as categorias 
facilita a visualização das mesmas, evitando cliques extras para alcançá-las.

A visualização do item em uma nova página abre possibilidades de instigar o usuário a procurar novos items dispostos na tela.

### Paleta de cores:

As cores foram coletadas da [Faster](https://fstr.co)
- 'faster-pink': '#F24B78',
- 'faster-blue': '#030140'

Elas estão adicionadas as configurações do Tailwindcss, para utilizar basta escolher o utilitário e adicionar a cor
```html
<h1 class="text-faster-pink bg-faster-blue">Hello World</h1>
```

### Tailwindd css

Escolhido devido ao desejo de agilizar o processo de prototipação do desafio.
Outro motivos para escolher a ferramenta:
- Fácil implementação do dark mode
- Flexibilidade
- Manutenibilidade




