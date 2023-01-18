import PropTypes from 'prop-types'
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';
//import { GifGrid } from './components/GifGrid';

const GifBrowserApp = props => {
    const [categories, setCategories] = useState(['']);
    //const catInput = useRef(null)

    const onAddCategory = (category) => {
        if(categories.includes(category)) return;
        setCategories([...categories, category]);
    }

  return (
    <>
        <h1>GifBrowserApp</h1>
        <AddCategory 
            onNewCategory={onAddCategory}
        />
        <ol>
            {
                categories.map(category => 
                (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
            }
        </ol>
    </>
  )
}

GifBrowserApp.propTypes = {}

export default GifBrowserApp;