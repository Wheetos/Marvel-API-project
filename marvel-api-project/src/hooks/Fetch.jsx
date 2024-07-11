import {useState, useEffect} from 'react';
/*This Fetch function uses the useEffect() to fetch the Marvel API hash
and then returns it back as a json. It then logs the json into a file, and 
also puts the json data into the setMarvel const */
const Fetch = () => {
    const [marvel, SetMarvel] = useState([]);
        useEffect(() => {
            fetch('http://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=869df33cbed7f29ac109149da9ccf83e&hash=d43a9e6097fe7b58c5be2871a3983e8c')
            .then((res) => {
        return res.json();
        })
            .then((data) => {
            console.log(data);
            SetMarvel(data.data.results);
        });
    }, []);

    return(
        <div>
            {marvel.map((data) => (
                <p key={data.id}>{data.name}</p>
            ))}
        </div>
    );
}
export default Fetch;