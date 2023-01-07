import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event)=>{
        const input = event.target.value;
        setInputValue(input)
    }

    const onSubmit = (event)=>{
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;

        //setCategories(categories => [inputValue, ...categories])
        
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input  
            type='text' 
            placeholder='Buscar Gifs' 
            value={inputValue}
            onChange={  onInputChange }
            />
        </form>
    )
}
