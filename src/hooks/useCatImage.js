import { useEffect, useState } from "react";

const CAT_PREFIX_IMAGE_URL = 'http://cataas.com/cat/says/';

export function useCatImage({fact}){

    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        if (!fact) return;
        const firstWord = fact.split(' ')[0];
        fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
        .then(response => response.json())
        .then(response => {
            const { _id } = response;
            setImageUrl(`${_id}`);
        })
    
    }, [fact]);
    return {imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}`};
}