import React from "react"; 
import CommissionButton from "./CommissionButton";
import FormButton from "./FormButton";
import Styles from "./Layout/myStyle.module.css"; 
import Cursor from "./Cursor/cursor";

function Home() {
    return (
        
        <div>
            <Cursor />
            <h1 className={Styles.bigblue}>
                
                hi this is home page 
                <br></br>
                <a href="https://reactjs.org/docs/handling-events.html">Hi this is a link</a>
                <CommissionButton />
                <FormButton />
            </h1>
        </div>
    ); 
}

export default Home; 
