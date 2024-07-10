//API key=http://gateway.marvel.com/v1/public/characters?ts=1&apikey=869df33cbed7f29ac109149da9ccf83e&hash=d43a9e6097fe7b58c5be2871a3983e8c
function Home(){

    fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=869df33cbed7f29ac109149da9ccf83e&hash=d43a9e6097fe7b58c5be2871a3983e8c")
    .then(response => console.log(response))
    .then(data => console.log(data.id))
    .catch(error => console.error(error));

    return(
    <div>
        <h1>Marvel Characters</h1>
        <h4>Get hooked on a hearty helping
             of heroes and villians.
        </h4>
    </div>
    );
}

export default Home