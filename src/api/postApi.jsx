import axios from "axios";

const api = axios.create({
    baseURL:"https://restcountries.com/v3.1"
})

//http get method use
export const getCountryData = ()=>{
    return api.get("/all?fields=name,population,region,capital,flags")
}
 

//http get method is used for specific country name
export const getCountryIndData = (name)=>{
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
}
 
