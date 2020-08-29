import React from "react"; 
import HomeButton from "./homeButton";
import CommissionButton from "./CommissionButton";
import FormButton from "./FormButton";
import Styles from "./Layout/myStyle.module.css"; 

function Home() {
    return (
        
        <div>
            <h1 className={Styles.bigblue}>
                hi this is home page 
                <a href="https://dev.to/andrewchmr/awesome-animated-cursor-with-react-hooks-5ec3">This is a link</a>
                <HomeButton />
                <CommissionButton />
                <FormButton />
            </h1>
        </div>
    ); 
}

export default Home; 
