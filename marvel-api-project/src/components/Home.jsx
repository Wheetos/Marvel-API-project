import Fetch from "../hooks/Fetch";

function Home(){

    return(
        <div>
            <h1>Marvel Characters</h1>
                <h4>Get hooked on a hearty helping
             of heroes and villians.
                </h4>
            <Fetch></Fetch>
        </div>
        );
    }

export default Home