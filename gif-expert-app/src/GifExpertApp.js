import React, { useState } from 'react';
import { AddCategory } from './AddCategory';

function GifExpertApp(props) {

    const [categories, setCategories] = useState(['Naruto', 'Samurai X', 'Digimon'])

    const handleAdd = () => { 
        const newElement = 'Pokemon'; 
        setCategories([...categories, newElement])
    }

    return (
        <>
          <h2>GifExpertApp</h2>  
          <AddCategory setCategories={ setCategories } />
          <hr />

          <button onClick={handleAdd}>Agregar</button>

          <ol>
              {
                  categories.map(category => {
                      return <li key={category}>
                          {category}
                      </li>
                  })
              }
          </ol>
        </>
    );
}

export default GifExpertApp;