import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs();
    }, [])
    

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=iXsYNn6eQSpxVoN6YfKSRVojGM1eOS5e&q=GFRIEND&limit=10'
        const resp = await fetch(url)
        const { data } = await resp.json() 
        const gifs = data.map( img => { 
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
         setImages(gifs)
    } 

    return (
        <>
        <h3> {category} </h3>
        <div  className='card-grid'>  
               {images.map((image) => 

                    <GifGridItem 
                    { ...image }
                    key={image.id} />
                )}  
        </div>
         </>
    )
}
