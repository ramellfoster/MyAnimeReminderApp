import { React,useState} from "react";


const SearchBar = () => {
    
    const [searchField, setSearchField] = useState("");
    const HandleSearchChange = (event) => {
      event.preventDefault();
        setSearchField(event.target.value);    
    };


    return (
        <div>
            <input type={'text'}
                placeholder="Search here"
                onChange={HandleSearchChange}
                
                value={searchField}>
                
                </input>
            </div>
    )
};

export default SearchBar;
