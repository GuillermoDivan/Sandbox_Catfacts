import { useEffect, useState } from "react";
import './App.css';
import { getRandomFact } from "./services/getRandomFact";

const CAT_PREFIX_IMAGE_URL = 'http://cataas.com/cat/says/';

export function App(){

const [fact, setFact] = useState("");
const [imageUrl, setImageUrl] = useState("");


useEffect(() => {getRandomFact().then(setFact)
}, [])

useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(' ')[0];
    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
    .then(response => response.json())
    .then(response => {
        const { _id } = response;
        setImageUrl(`${_id}`);
    })

}, [fact])

const handleClick= async() => {
    const newFact = await getRandomFact();
    setFact(newFact);
}
    return(
        <main>
            <h1>Catfacts</h1>
                <button onClick={handleClick}>Get new fact!</button>
                <section>
                    {fact && <p>{fact}</p>}
                </section>
                <section>
                    {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} 
                    alt={`Cat image based on the first word of this fact: ${fact}`} /> }
                </section>
        </main>
    )
}