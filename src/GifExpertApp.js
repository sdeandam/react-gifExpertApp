import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories ] = useState(['Octavio'])

    //const handleAdd = () => {
    //    setCategories([...categories, 'Goyis']);
    //    setCategories( categs => [...categs, 'Silvia']);
    //}

    return (
    <>
        <h2>GifExpertApp Silvia</h2>
        <AddCategory setCategories={ setCategories } />
        <hr />

        {/*<button onClick={ handleAdd }>Agregar</button>*/}

        <ol>
            {
                categories.map( category => (
                    //return <li key={category}>{ category }</li>
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </ol>
    </>
  )
}
