import { useState } from "react";

const RangeFont = ({ title }) => {
    const [fontSize, setFontSize] = useState(18); // Initial font size

    const handleFontSizeChange = (newFontSize) => {
        setFontSize(newFontSize);
      };

    const titleStyle = {
      fontSize: `${fontSize}px`,
    };
  
    return (
      <h2 style={titleStyle}>
        {title}
        <input
          type="range"
          min="12"
          max="36"
          step="1"
          value={fontSize}
          onChange={(e) => handleFontSizeChange(parseInt(e.target.value))}
        />
      </h2>
    );
  };
  
  export default RangeFont;