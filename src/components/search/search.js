import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { geoApiOptions, url } from "../../api"

export const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState('')

    const handleOnChange = (searchData) =>{
        setSearch(searchData)
        onSearchChange(searchData)
    }

    const loadOptions =  async (inputValue) => {
       
        try {
            const response = await fetch(`${url}?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions);
            const result = await response.json();
            return{
                options: result.data.map((city) => {
                    return{
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,//https://openweathermap.org/api/one-call-api <- la documental para esta parte de codigo
                    }
                })
            }
            
        } catch (error) {
            console.log(error)
        }
           


    }

  return (
    <AsyncPaginate
        placeholder='Buscar ciudades'
        debounceTimeout={500}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
    />
  )
}
