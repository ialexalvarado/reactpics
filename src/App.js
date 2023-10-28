import SearchBar from "./components/SearchBar"
import searchImages from "./api"

export const App= ()=>{ 

    const handleSubmit= (term)=>{
        console.log('do search '+term)
        searchImages(term)
    }

    return (
    <div>
        <SearchBar onSubmit={handleSubmit} />
    </div>
    )
}
