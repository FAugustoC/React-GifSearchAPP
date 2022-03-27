import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = ( ) => {

    const [categories, setCategories] = useState( ['Nintendo'] );

    return (
        <> 
            <h1> GiftExpertApp </h1>
            <h2> Ejercicio React JS</h2>
            <AddCategory setCategories ={ setCategories } />
            <br></br>
            <hr />
            <br></br>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category ={ category } 
                        />
                    ))
                }
            </ol>

        </>
    );
};

export default GiftExpertApp;