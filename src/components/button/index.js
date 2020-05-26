import React from 'react';

import './style.css';

/**
 * receive text and click function
 * @param {*} text
 * @param {*} onClick
 */
export default function Button({ text, onClick }){
    return(
        <button 
            className="Button"
            onClick={()=>onClick()} 
        >
            { text }
        </button>
    );
}