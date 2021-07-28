import React from 'react' 
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category) 

    return (
        <>
        <h3> {category} </h3>
        { loading ? 'Carganding' : 'Cargao'}
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
