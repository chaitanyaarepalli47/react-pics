import {useState} from 'react';
import "./Searchbar.css"

function SearchBar({searchData}){
    const [searchInput, setSearchInput] = useState("");

    const handleSubmit= (e) =>{
        e.preventDefault();
        searchData(searchInput);
    };

    const handleChange = (e) =>{
        setSearchInput(e.target.value);
    };

    return(
        <div className = "search-bar">
            <form onSubmit={handleSubmit} className = "seach-bar-form">
                <input
                    placeholder="Search here"
                    onChange={handleChange}
                    value={searchInput} />
                {/* //<button onClick={handleSubmit}>Clik Me!</button> */}
            </form>
        </div>

    );
}

export default SearchBar;