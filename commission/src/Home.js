import React from "react"; 
import CommissionButton from "./CommissionButton";
import FormButton from "./FormButton";
import Styles from "./Layout/myStyle.module.css"; 
import Cursor from "./Cursor/cursor";
import COMPButton from "./COMP 251/COMPbutton";

function Home() {
    return (
        
        <div>
            <Cursor />
            <h1 className={Styles.bigblue}>
                
                CALLA LU 
                <br></br>
                
                <CommissionButton />
                <FormButton />
                <COMPButton />
            </h1>
        </div>
    ); 
}

export default Home; 
