
# Manga API

API feita em Node com o propósito de encapsular e centralizar a resposta de vários provedores de mangas


## Stack utilizada

**Back-end:** Node, Express


## Documentação da API

#### Retorna mangas filtrados pelo título

```http
  GET /query/:title
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `title` | `string` | **Obrigatório**. título do manga |

#### Retorna as informações de um manga e seus capítulos

```http
  GET /manga/:slug
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `slug`      | `string` | **Obrigatório**. slug que pode ser obtido no endpoint de busca |

#### Retorna todas as paginas de um capítulo

```http
  GET /manga/:slug/:chapter
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `slug`      | `string` | **Obrigatório**. slug que pode ser obtido no endpoint de busca |
| `chapter`   | `string` | **Obrigatório**. numero do capítulo que pode ser obtido no endpoint de manga |


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/KaliemSB/manga-api
```

Entre no diretório do projeto

```bash
  cd manga-api
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Autores

- [@Kaliem](https://www.github.com/KaliemSB)

