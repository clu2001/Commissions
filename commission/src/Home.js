import React from "react"; 
import HomeButton from "./homeButton";
import CommissionButton from "./CommissionButton";
import FormButton from "./FormButton";
import Styles from "./Layout/myStyle.module.css"; 

function Home() {
    return (
        <div>
            <div>
                <h1 className={Styles.bigblue}>
                    hi this is home page 
                    <HomeButton />
                    <CommissionButton />
                    <FormButton />
                </h1>
            </div>
        </div>
    ); 
}

export default Home; 
