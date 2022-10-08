
import React from 'react'
import { Icon } from '../style/Icons'

const Search = () => {
    return (
        <div className='search__form_group'>
        <button variant='outline-primary' type='submit' id='button-search'>
            <Icon className='fas fa-search'></Icon>
        </button>
        <input 
            type="text" 
            placeholder='search product'
            className='form-control'
            ria-describedby='button-search' 
            autoFocus required
        />
    </div>
    )
}

export default Search