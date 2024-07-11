import {useState, useEffect} from 'react';
import * as React from 'react'
/*This Fetch function uses the useEffect() to fetch the Marvel API hash
and then returns it back as a json. It then logs the json, and 
also puts it into the setMarvel const */
const Fetch = () => {
    const [marvel, SetMarvel] = useState([]);
        useEffect(() => {
            fetch('https://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=869df33cbed7f29ac109149da9ccf83e&hash=d43a9e6097fe7b58c5be2871a3983e8c')
            .then((res) => {
        return res.json();
        })
            .then((data) => {
            console.log(data);
            SetMarvel(data.data.results);
        });
    }, []);

    return(
        <React.Fragment>
             {marvel.map((data) => (
                <div key ={data.id}>
                <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt={data.name} />
                <p>{data.name}</p>
                </div>
            ))}
        </React.Fragment>
    );
}
export default Fetch;