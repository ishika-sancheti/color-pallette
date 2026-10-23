import React, { useState, createContext, useContext, useMemo } from 'react'; 
import ReactDOM from 'react-dom'; 
import './App.css'; 

const ColorContext = createContext(); 

const useColorPalette = () => { 
      const [colors, setColors] = useState(['#ff5733', '#33ff57', '#5733ff']); 
      const [selectedColor, setSelectedColor] = useState(null); 
       
      const addColor = () => { 
            setColors([...colors, getRandomColor()]);
      }; 
      const removeColor = () => {
            setColors(
                  colors.filter((color, i) => i!==index)
            );
      }; 
      const selectColor = () => { }; 
  
      const contextValue = useMemo(() => ({           // Memoize the context value to avoid unnecessary re-renders
      colors, 
      selectedColor, 
      addColor, 
      removeColor, 
      selectColor, 
      }), [colors, selectedColor]); 
 
      return contextValue; 
}; 
 

const ColorPalette = () => { 
        
      const { colors, selectedColor, selectColor, removeColor } = useContext(ColorContext);   // Accessing the color-related functions and data from the context 
 
      return ( 
      <div className="color-palette"> 
            {/* Mapping over colors to render color boxes */} 
            {colors.map((color, index) => ( 
            <div 
            key={index} 
            className={`color-box ${selectedColor === index ? 'selected' : ''}`} 
            style={{ backgroundColor: color }} 
            onClick={() => selectColor(index)}> 
      <button onClick={() => removeColor(index)}>Remove</button> 
      </div> 
      ))} 
      </div> 
      ); 
}; 

const ColorControls = () => { }; 

const App = () => { 
      const color_details=ColorPalette();
      return ( 
      <ColorContext.Provider> 
            <div>{ColorPalette}</div>
            <div>{ColorControls}</div>
      </ColorContext.Provider> 
      ); 
}; 

const getRandomColor = () => { 
      const letters = '0123456789ABCDEF';
      let color = '#'; 
      for (let i = 0; i < 6; i++) { 
      color += letters[Math.floor(Math.random() * 16)]; 
      } 
      return color; 
};

export default App;