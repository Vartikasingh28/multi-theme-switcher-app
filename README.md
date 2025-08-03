# 🎨 Multi-Theme Switcher React App

This is a React + TypeScript application that allows users to switch between **three distinct themes**:

- **Theme 1**: Minimalist light layout with sans-serif fonts  
- **Theme 2**: Dark mode with a sidebar layout and serif fonts  
- **Theme 3**: Playful colorful layout with a card-based grid using Google Fonts  

The theme switcher persists across reloads and is globally managed using React Context API.
Deployment Link-https://dynamic-dango-f6b24d.netlify.app/
---

## 🚀 Features

- 🔁 Switch between 3 fully different themes
- 🌐 Theme persists using `localStorage`
- 📦 Product cards loaded via [FakeStoreAPI](https://fakestoreapi.com/)
- 📱 Fully responsive layout (CSS)
- 🛠 Built using:
  - React + TypeScript
  - React Router
  - CSS for styling
  - Vite for fast dev/build

---
multi-theme-switcher-app/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ └── Header.tsx
│ ├── context/
│ │ └── ThemeContext.tsx
│ ├── pages/
│ │ ├── Home.tsx
│ │ ├── About.tsx
│ │ └── Contact.tsx
│ ├── styles/
│ │ └── theme.css
│ ├── App.tsx
│ ├── main.tsx
│ └── vite-env.d.ts
├── index.html
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/multi-theme-switcher-app.git
cd multi-theme-switcher-app
2. Install dependencies

npm install
3. Start the development server

npm run dev
App will be available at http://localhost:5173/

4. Build for production

npm run build
5. Preview production build

npm run preview
🌍 Deployment (Netlify)
Push your code to GitHub

Go to Netlify

Connect your GitHub repo

Set build command to:

🔧 Scripts
Command	Description
npm run dev	Start development server
npm run build	Build production version
npm run preview	Preview production build
tsc -b	Type-check the codebase



## 📁
