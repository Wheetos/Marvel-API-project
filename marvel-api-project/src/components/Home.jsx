import Fetch from "../hooks/Fetch";
import * as React from 'react'

function Home(){

    return(
        <React.Fragment>
            <h1>Marvel Characters</h1>
                <h4>Get hooked on a hearty helping
             of heroes and villians.
                </h4>
            <Fetch></Fetch>
        </React.Fragment>
        );
    }

export default Home