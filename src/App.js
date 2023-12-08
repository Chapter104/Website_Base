import React, { useState, useEffect } from 'react';
import "./App.css";

const App = () => {

    const [showElement, setShowElement] = useState(true);

    useEffect(() => {
        // Delay the setting of showElement to true by 1000 milliseconds (1 second)
        const delay = setTimeout(() => {
            setShowElement(false);
        }, 350);

        // Cleanup function to clear the timeout in case the component unmounts
        return () => clearTimeout(delay);
    }, [showElement]); // Use showElement as a dependency here

    const handleClick = () => {
        setShowElement(true); // Immediately set showElement to true when the button is clicked
    };

    return (
        <>
            <div className="custom-shape-divider-top-1702022557">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <h1 className='textHeader'>
                Happy Birthday Milaan
            </h1>
            <div className='main'>
                {showElement ? <img src={require("./sleeper.png")} alt="" width={300} />:<img src={require("./bday.png")} alt="" width={300} />  }
                <button className="glow-on-hover" onClick={handleClick}>
                    Next Image
                </button>
            </div>
        </>
    );
}

export default App;
