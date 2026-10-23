# React Color Palette

A React application that allows users to manage a color palette by adding random colors, removing existing colors, and selecting individual colors.

## Features

- **Add Color:** Add a randomly generated color to the palette.
- **Remove Color:** Remove a color from the palette using its index.
- **Select Color:** Select a color by clicking on its color box.
- **Dynamic Palette:** Display the current collection of colors.
- **Context API:** Share palette state and functions across components.
- **Custom Hook:** Manage color palette logic using `useColorPalette`.
- **Memoization:** Use `useMemo` to memoize the context value and avoid unnecessary updates.

## Tech Stack

- React
- JavaScript
- Vite
- CSS
- React Hooks (`useState`, `useContext`, `useMemo`)

## Project Structure

```text
src/
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

The application uses a custom hook, `useColorPalette`, and separate `ColorPalette` and `ColorControls` components to manage the palette and its controls.

## Implementation Instructions

### 1. Prerequisites

Install [Node.js](https://nodejs.org/) and npm. Verify the installation by running:

```bash
node -v
npm -v
```

### 2. Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

Replace the placeholders with your GitHub repository URL and project folder name.

### 3. Install Dependencies

Run the following command from the project directory:

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:5173/`.

### 5. Use the Application

- Click **Add Color** to add a randomly generated color.
- Click a color box to select it.
- Click **Remove** to remove that color from the palette.

### 6. Build the Application

To compile the application for production, run:

```bash
npm run build
```

Vite generates the production-ready files in the `dist/` directory.

### 7. Preview the Production Build

After building the application, run:

```bash
npm run preview
```

Open the local URL displayed in the terminal to preview the production build.

## Learning Outcomes

This project demonstrates the use of React state management, custom hooks, Context API, event handling, array operations, conditional CSS classes, and memoization.

## License

This project was created for learning and educational purposes.
