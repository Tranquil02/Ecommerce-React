// LanguageSelector.js
import React, { useState } from 'react';
import "./language.css"

const LanguageSelector = () => {
    const [language, setLanguage] = useState('en');

    const handleChange = (event) => {
        setLanguage(event.target.value);
        // Handle language change logic here (e.g., update context, make API call)
    };

    return (
        <div className="language-selector">
            <label htmlFor="language-select">Choose a language:</label>
            <select
                id="language-select"
                value={language}
                onChange={handleChange}
            >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="zh">Chinese</option>
            </select>
        </div>
    );
};

export default LanguageSelector;
