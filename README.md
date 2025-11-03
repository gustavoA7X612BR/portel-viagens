# 📘 Portel Viagens

Aplicativo Next.js para exibir horários de viagens fluviais entre Belém e Portel, utilizando Prisma como ORM e hospedado na Vercel.

## 🌟 Funcionalidades

- Exibição de viagens semanais com horários e navios
- Relação entre navios e empresas de navegação
- Interface responsiva e estilizada com Tailwind CSS
- Possibilidade de revalidar manualmente via API
- Painel administrativo (em desenvolvimento)

🛠 Tecnologias

Next.js 14+ (App Router)

TypeScript

Prisma ORM

PostgreSQL (Vercel Postgres)

Tailwind CSS

React Icons

ESLint + Prettier

Vercel para deploy e analytics

⚡ Instalação

# Clonar o repositório

git clone https://github.com/seu-usuario/portel-viagens.git
cd portel-viagens

# Instalar dependências

npm install

# Configurar variáveis de ambiente

cp .env.example .env.local

# Edite .env.local com DATABASE_URL, REVALIDATE_SECRET e NEXT_PUBLIC_SITE_URL

🚀 Desenvolvimento

# Rodar servidor de desenvolvimento

npm run dev

Acesse: http://localhost:3000

🏗 Prisma

Gerar cliente Prisma:

npx prisma generate

Rodar migrações:

npx prisma migrate dev

Exemplo de consulta:

import prisma from "@/lib/prisma-client";

const trips = await prisma.trip.findMany({
include: { ship: { include: { company: true } } },
});

🌐 Deploy na Vercel

Crie um projeto na Vercel

Configure variáveis de ambiente:

DATABASE_URL → conexão com o PostgreSQL

NEXT_PUBLIC_SITE_URL → URL do site

REVALIDATE_SECRET → token secreto para revalidar páginas

Deploy automático ao push na branch main

🔄 Revalidação de páginas (ISR)

Automaticamente a cada 4 dias:

export const revalidate = 60 _ 60 _ 24 \* 4; // 4 dias

Manual via API:

curl "https://portel-viagens.vercel.app/api/revalidate?secret=SEU_TOKEN"

🎨 Estilização

Tailwind CSS com cores personalizadas:

Azul principal: #000094

Azul secundário: #020D57

Fontes: Roboto e Open Sans

Exemplo:

body {
font-family: Roboto, sans-serif;
background-color: var(--mainBlue);
color: var(--foreground);
}

📊 Analytics

Vercel Analytics para medir:

Visitantes por dia e hora

Páginas mais acessadas

Performance do site

Para rastrear horários de viagem clicados, recomenda-se event tracking com Google Analytics ou log de buscas na API.

📂 Estrutura do Projeto
/app # Rotas e páginas do Next.js
/lib # Prisma client e helpers
/prisma # Schema e migrations
/public # Assets estáticos
/styles # Tailwind e CSS global

🤝 Contribuição

Fork o repositório

Crie uma branch: git checkout -b minha-feature

Commit suas alterações: git commit -m "Minha feature"

Push para a branch: git push origin minha-feature

Abra um Pull Request

📝 Licença

MIT © Gustavo Monteiro
