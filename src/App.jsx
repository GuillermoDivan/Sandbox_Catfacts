import './App.css';
import { useCatFact } from './hooks/useCatFact';
import { useCatImage } from "./hooks/useCatImage";

export function App(){

    const { fact, refreshFact } = useCatFact();
    const { imageUrl } = useCatImage({fact});

    return(
        <main>
            <h1>Catfacts</h1>
                <button onClick={refreshFact}>Get new fact!</button>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} 
                alt={`Cat image based on the first word of this fact: ${fact}`} /> }
        </main>
    )
}