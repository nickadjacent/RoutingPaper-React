import React from 'react';
// import { Link } from '@reach/router'


const WordColor = ({ value, color, bgColor }) => {

    return (
        <div>
            <h1 style={{ backgroundColor: [bgColor], color: [color] }}> The word is: {value}</h1>
        </div >
    );
};

export default WordColor;