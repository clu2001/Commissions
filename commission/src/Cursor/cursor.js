import React, { useState, useEffect } from 'react'; 
import classNames from "classnames"; 

// make sure that the user isn't on mobile 
const Mobile = () => {
    const ua = navigator.userAgent; 
    return /Android|Mobi/i.test(ua);
}; 

const Cursor = () => {

    const [position, setPosition] = useState({x:0, y:0});
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);  
    const [linkHovered, setLinkHovered] = useState(false); 
    const [buttonHovered, setButtonHovered] = useState(false); 

    useEffect(() => {
        addEventListeners(); 
        handleLinkHoverEvents();
        handleButtonHoverEvents(); 
        return () => removeEventListeners(); 
    }, []); 

    if (typeof navigator !== 'undefined' && Mobile()) return null;

    const handleLinkHoverEvents = () => {
        document.querySelectorAll("a").forEach(el => {
            el.addEventListener("mouseover", () => setLinkHovered(true)); 
            el.addEventListener("mouseout", () => setLinkHovered(false)); 
        }); 
    };

    const handleButtonHoverEvents = () => {
        document.querySelectorAll("button").forEach(el => {
            el.addEventListener("mouseover", () => setButtonHovered(true)); 
            el.addEventListener("mouseout", () => setButtonHovered(false)); 
        }); 
    };

    const addEventListeners = () => {
        document.addEventListener("mousemove", onmousemove); 

        document.addEventListener("mouseenter", onmouseenter); 
        document.addEventListener("mouseleave", onmouseleave); 

        document.addEventListener("mousedown", onmousedown); 
        document.addEventListener("mouseup", onmouseup); 
    }; 

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onmousemove);

        document.addEventListener("mouseenter", onmouseenter); 
        document.addEventListener("mouseleave", onmouseleave); 

        document.addEventListener("mousedown", onmousedown); 
        document.addEventListener("mouseup", onmouseup);
    }; 

    const onmousemove = (e) => {
        setPosition({x: e.clientX, y: e.clientY}); 
    }; 

    const onmouseenter = () => {
        setHidden(false); 
    }

    const onmouseleave = () => {
        setHidden(true); 
    }

    const onmousedown = () => {
        setClicked(true); 
    }; 

    const onmouseup = () => {
        setClicked(false); 
    }; 

    const cursorClasses = classNames(

        'cursor',
        {
            'cursor--clicked': clicked,
            'cursor--hidden': hidden, 
            'cursor--link-hovered': linkHovered, 
            'cursor--button-hovered': buttonHovered
        }
    )

    return <div className={cursorClasses} 
            style={{
                left: `${position.x}px`, 
                top: `${position.y}px`
            }}/>
}


export default Cursor; 