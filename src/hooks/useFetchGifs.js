import { useState, useEffect } from 'react';
import {getGifs} from '../helpers/getGifs.js';

export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => { 
       const gi = await getGifs(category);
       setGifs(gi);
       setIsLoading(false);
    }
  
    useEffect(() => { 
      getImages();
    }, []);

    return {
        gifs,
        isLoading
    };
}
