# react-movie-tutorial

YouTube: https://www.youtube.com/watch?v=G6D9cBaLViA

GitHub: https://github.com/techwithtim/Learn-React-In-One-Project

- Vite is a lightweight server that allows us to run our React application.

- JSX is a combination of JavaScript and HTML.

- A component is any function in JavaScript that returns JSX code.

- In JSX, rather than having `class`, which is a reserved keyword in JavaScript, we use `className`.

- State is something where once it is updated, the component will change and re-render itself to show the new state.

- When the state change occurs, it rerun the entire code in the component, the state will stay the same, the entire component is re-rendered and returned a new version of the UI.

## Setup

```shell
npm create vite@latest frontend --template react
```

```shell
cd frontend
npm install
npm run dev
```

http://localhost:5173/

## Router

```shell
npm install react-router-dom
```

- Add BrowserRouter in `main.jsx`

- Add Routes, Route in `App.jsx`
