import { useState } from "react"

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
    <div>
        <form onSubmit={handleFormSubmit}>
            <input value={term} onChange={handleChange}/>
        </form>
    </div>
    )
}

export default SearchBar