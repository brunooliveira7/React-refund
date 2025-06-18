# 📦 React‑refund

**React‑refund** é uma aplicação web desenvolvida em React (com Vite + TypeScript + Tailwind CSS) para facilitar o processo de solicitação e gestão de reembolsos.

A aplicação possui dois perfis de usuário:

- **Funcionário (Employee)**: pode fazer login, criar conta e enviar pedidos de reembolso com comprovantes.
- **Administrador (Manager/Admin)**: faz login e visualiza, filtra, página por página, detalhes dos pedidos enviados pelos funcionários.

---

## 🚀 Funcionalidades

### 1. Autenticação
- Sign In e Sign Up com layout consistente usando `AuthLayout` (logo + centralização)
- Estados controlados com `useState`, botão de envio com `isLoading`
- Redirecionamento condicional e prevenção de acesso direto à página de confirmação

### 2. Solicitação de Reembolso (Funcionário)
- Formulário com campos: nome (automático), categoria (select com ícones), valor e upload de comprovante
- `Upload` component customizado que exibe nome do arquivo
- Submissão com redirecionamento para `Confirm` com mensagem de sucesso + botão "Nova solicitação"

### 3. Dashboard do Administrador
- Lista de solicitações exibindo nome, categoria e valor formatado como BRL (ex: `R$ 34,78`)
- Pesquisa por nome (campo de input e `console.log` placeholder para integração futura)
- Paginação com botões “anterior/próximo”, página atual e total
- Container com rolagem vertical e scrollbar personalizada via Tailwind CSS
- Clique em item abre página de detalhes com `Route` para `/refund/:id`

### 4. Detalhes do Reembolso
- Página que apresenta todos os dados do reembolso
- Se `id` na URL, inputs aparecem como **desabilitados**
- Exibe link **"Abrir comprovante"** direcionando ao comprovante em nova aba (URL placeholder)

### 5. Rotas baseadas em perfil
- Implementação de routing condicional conforme `session.user.role` (`employee` vs `admin`)
- Replays de `AuthRoutes`, `EmployeeRoutes`, `ManagerRoutes`
- Loading screen com componente `Loading` exibido durante carregamento das rotas


---

## 🧩 Tecnologias
Vite + React + TypeScript

Tailwind CSS

React Router DOM

clsx + tailwind-merge

---

<p align="center">
  <img alt="React-refund" src="">
</p>

---

### ✍️ Autor
Desenvolvido por Bruno Oliveira 🧠

## 📝 Licença
Este projeto está sob a licença MIT.

