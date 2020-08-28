import React from "react"; 
import HomeButton from "./homeButton";
import CommissionButton from "./CommissionButton";
import FormButton from "./FormButton";
import Styles from "./Layout/myStyle.module.css"; 
import Cursor from "./Cursor/cursor.js"; 


function Home() {
    return (
        <div>
            <h1 className={Styles.bigblue}>
                hi this is home page 
                <Cursor />
                <HomeButton />
                <CommissionButton />
                <FormButton />
            </h1>
        </div>
    ); 
}

export default Home; 
