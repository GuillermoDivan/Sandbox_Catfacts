import './App.css';
import { useCatFact } from './hooks/useCatFact';
import { useCatImage } from "./hooks/useCatImage";

const CAT_PREFIX_IMAGE_URL = 'http://cataas.com/cat/says/';

export function App(){

    const { fact, refreshFact } = useCatFact();
    const { imageUrl } = useCatImage({fact});

    const handleClick= async() => {
    refreshFact();
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