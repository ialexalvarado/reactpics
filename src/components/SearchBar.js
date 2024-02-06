import { useState } from "react"
import "./SearchBar.css";

function SearchBar({onSubmit}){

    const [term, setTerm]= useState('')

    const handleFormSubmit= (event)=> {
        event.preventDefault()//prevent reload page
        console.log('tell parent data')
        onSubmit(term)
        //never ever do this
        //onSubmit(
        //    document.querySelector(input).value
        //)
    }

    const handleChange= (event)=>{
        console.log(event.target.value)
        setTerm(event.target.value)
    }

    return(
    <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
            <label>Enter search term</label>
            <input value={term} onChange={handleChange}/>
        </form>
    </div>
    )
}

export default SearchBar