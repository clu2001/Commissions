import React from "react"; 
import HomeButton from "./homeButton";
import CommissionButton from "./CommissionButton";
import FormButton from "./FormButton";
import Styles from "./Layout/myStyle.module.css"; 
import Cursor from "./Cursor/cursor";

function Home() {
    return (
        
        <div>
            <h1 className={Styles.bigblue}>
                <Cursor />
                hi this is home page 
                <a href="https://reactjs.org/docs/handling-events.html">Hi this is a link</a>
                <HomeButton />
                <CommissionButton />
                <FormButton />
            </h1>
        </div>
    ); 
}

export default Home; 
