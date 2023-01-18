import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState("");
  
    const onInputValueChange = (event) => { 
        setInputValue(event.target.value);
    }

    const handleSubmitEvent =  (event) => { 
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        //setCategories( categories => [...categories, inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue("");
    }
  
    return (
    <form
        onSubmit={handleSubmitEvent}
    >
        <input
            type="text" 
            placeholder="Browse awesome gifs"
            value={inputValue}
            onChange={onInputValueChange}

        />
    </form>
  )
}
