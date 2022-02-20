import { Input } from "antd"

const Search = (props) => {

    const handleChange = (e) => {
        e.preventDefault()
        props.query(e.target.value)
        
     }
    return (
        <>

       <Input type="text" onChange={handleChange}/>

        </>
    )
}

export default Search