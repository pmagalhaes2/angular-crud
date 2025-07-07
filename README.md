
# 🛒 CRUD de Produtos - Angular + JSON Server

Este projeto é uma aplicação de **CRUD (Create, Read, Update, Delete)** de produtos desenvolvida com **Angular** e **TypeScript** no frontend, e utiliza o **JSON Server** no backend (fake API) para simular persistência de dados.

---

## 📁 Estrutura do Projeto

```
crud-produtos/
├── backend/
│   └── db.json
├── frontend/
│   ├── src/
│   └── angular.json
└── README.md
```

---

## 📋 Funcionalidades

- ✅ Listagem de produtos  
- ➕ Adição de novos produtos  
- ✏️ Edição de produtos existentes  
- 🗑️ Exclusão de produtos  

---

## 🧰 Tecnologias Utilizadas

### Frontend
- Angular
- TypeScript
- HTML / SCSS
- Angular Material

### Backend
- JSON Server

---

## ⚙️ Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/pmagalhaes2/angular-crud.git
cd angular-crud
```

---

### 2. Instalar e iniciar o frontend

```bash
cd frontend
npm install
ng serve
```

A aplicação Angular estará disponível em:  
📍 `http://localhost:4200/`

---

### 3. Instalar e iniciar o backend (JSON Server)

Abra um novo terminal na raiz do projeto e execute:

```bash
cd backend
npx json-server --watch db.json --port 3000
```

A API estará disponível em:  
📍 `http://localhost:3000/products`

---

## 🛠️ Scripts úteis

```bash
# Rodar o frontend
cd frontend
ng serve

# Rodar o backend
cd backend
npx json-server --watch db.json --port 3000
```

---

## 📌 Observações

- Certifique-se de que o frontend esteja realizando as requisições para `http://localhost:3000/products` (idealmente configurado em `environment.ts`).
- É necessário ter o **Node.js** instalado para rodar o projeto.

---

## 📝 Licença

Este projeto está licenciado sob a licença MIT.  
Sinta-se à vontade para usar, modificar e compartilhar.

---

🙋‍♀️ Desenvolvido por [Patricia Magalhães](https://www.linkedin.com/in/patricia-magalh%C3%A3es/)
