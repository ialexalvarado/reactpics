import axios from "axios";

const searchImages= async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID PcSUR5E5I3aOBTaTlhCYACYx9hTLdJXAyBskgnHV-3c'
        },
        params:{
            query: term
        }
    })
    console.log(response.data.results)
    return response.data.results
}

export default searchImages