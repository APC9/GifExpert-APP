import { useState } from "react"
import { AddCategory, GifGrid } from "./Components"

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['naruto'])
    
    const onAddCategory = (newCategory)=>{

        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory= { onAddCategory }
            />

            { categories.map((category) => 
                    <GifGrid key={category} category={category} />
            )}


        </>
    )
}
