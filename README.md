<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
#  Fábricas de Ideias

Projeto acadêmico desenvolvido em equipe durante o **curso presencial de Front-end e React da Aponti**, com foco na aplicação prática de conceitos de desenvolvimento web e construção de uma plataforma digital com impacto social.

## 📌 Sobre o projeto
O site da **Fábricas de Ideias** foi idealizado para representar os valores da marca, destacando:
- sustentabilidade ambiental
- educação ambiental
- trabalho artesanal
- protagonismo feminino

A proposta busca criar uma experiência digital acessível, intuitiva e alinhada ao propósito social da empresa.

## 🎯 Objetivo
Aplicar na prática conhecimentos de **Front-end e React**, desenvolvendo um site institucional que comunique propósito, impacto social e identidade visual de forma clara e funcional.

## 🛠️ Tecnologias utilizadas
- React
- JavaScript
- HTML5
- CSS3
- Git & GitHub

## 📄 Documentação
A documentação completa do projeto (pitch acadêmico) está disponível em:  
👉 https://docs.google.com/document/d/12EYmlKS48db7BrEE4bL-cRDl8eLHOYDRPut3pF1SBlU/edit?tab=t.0

## 👥 Projeto em equipe
Projeto desenvolvido em equipe durante o curso da **Aponti**.

## 🚀 Status do projeto
✔️ Projeto acadêmico finalizado  
📚 Desenvolvido para fins de aprendizado e portfólio

## 💡 Aprendizados
- Estruturação de projetos em React
- Organização de componentes
- Trabalho em equipe com versionamento de código
- Desenvolvimento orientado a propósito e impacto social

- ## 🖼️ Telas do projeto
  **Home**
- Home do site Fábricas de Ideias, destacando a identidade visual do projeto e os valores de sustentabilidade, impacto social e protagonismo feminino.
  
  <img width="1908" height="1069" alt="image" src="https://github.com/user-attachments/assets/2449eeee-8b73-4a00-9e48-aba5734a526a" />
  

  **Projetos**
- Tela de projetos do site Fábricas de Ideias, desenvolvida para apresentar iniciativas sociais e educacionais de forma clara e acessível, integrando conteúdo institucional e identidade visual alinhada aos valores da marca.
  
  <img width="1887" height="1064" alt="image" src="https://github.com/user-attachments/assets/0c1cd847-dccb-49f3-8473-841a02093ed0" />

  **Loja**
- Desenvolvida em React, com exibição de catálogo, filtros por tipo de produto e organização visual pensada para facilitar a navegação e a descoberta dos brinquedos.
  
  <img width="1914" height="1072" alt="image" src="https://github.com/user-attachments/assets/17e02518-f665-43cd-a42e-3d92dcccf719" />




>>>>>>> 64cf233e8bd79e838db0cd816f09a53882e0b71e
