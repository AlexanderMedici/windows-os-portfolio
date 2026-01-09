# Portfolio Windows Theme

A Windows-inspired portfolio UI built with React and Vite. It recreates a desktop experience with draggable windows, a taskbar, a start menu, and a set of mini apps for showcasing work and personal info.



## Features
- Boot screen with session persistence
- Desktop icons for This PC, Profile, Resume, My Projects, Games, Settings, Recycle Bin, and Terminal
- Window manager with drag, minimize, maximize, focus, and mobile auto-maximize
- Wallpaper and theme switching with localStorage persistence
- Project gallery with frontend and fullstack sections
- Built-in mini games (Tic Tac Toe, Memory Game, Number Guessing)

## Tech Stack
- React 19
- Vite 7
- Tailwind CSS 4
- React Icons
- @vercel/analytics

## Project Structure
- `src/components/` UI components (Desktop, Taskbar, StartMenu, WindowModal, apps, games)
- `src/data/projects.js` project metadata and links
- `src/data/wallpapers.js` wallpaper and theme definitions
- `src/assets/` images and resume PDF

## Customization
- Update profile details, links, and resume download text in `src/components/Desktop.jsx`
- Add or edit projects in `src/data/projects.js`
- Add wallpapers or theme colors in `src/data/wallpapers.js`
- Replace images and resume assets in `src/assets/`

## Scripts
- `npm run dev` start the Vite dev server
- `npm run build` build for production
- `npm run preview` preview the production build
- `npm run lint` run ESLint
- `npm run deploy` deploy `dist` to GitHub Pages

## Getting Started
```bash
npm install
npm run dev
```