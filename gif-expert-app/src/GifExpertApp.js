import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

function GifExpertApp(props) {

    const [categories, setCategories] = useState(['GFRIEND'])

    /* const handleAdd = () => { 
        const newElement = 'Pokemon'; 
        setCategories([...categories, newElement])
    } */

    return (
        <>
          <h2>GifExpertApp - Milumon</h2>  
          <AddCategory setCategories={ setCategories } />
          <hr />

          {/* <button onClick={handleAdd}>Agregar</button> */}

          <ol>
              {
                  categories.map(category => (
                    <GifGrid 
                        key={ category }
                        category= { category }
                        />
                  ))
              }
          </ol>
        </>
    );
}

export default GifExpertApp;