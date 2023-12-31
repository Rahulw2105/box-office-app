const BASE_URL = "https://api.tvmaze.com"
const apiGet = async (queryString) => {

    const response = await fetch(`${BASE_URL}${queryString}`)
    const body = await response.json();
    return body;

}

export const searchForShow = (query) => {
   return  apiGet(`/search/shows?q=${query}`)
} 
export const searchForPeople = (query) => {
    return  apiGet(`/search/people?q=${query}`)
 } 