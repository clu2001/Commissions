import React from "react"; 
import HomeButton from "./homeButton";
import CommissionButton from "./CommissionButton";
import FormButton from "./FormButton";


function Home() {
    return (
        <div>
            <h1>
                hi this is home page 
                <HomeButton />
                <CommissionButton />
                <FormButton />
            </h1>
        </div>
    ); 
}

export default Home; 
