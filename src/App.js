import { useState } from "react";
import SearchBar from "./components/Searchbar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App(){
    const [images,setImages] = useState([]);
    const handleChildData = async (e) => {
        setImages(await searchImages(e));
    };

    return (
        <div className="App">
            <SearchBar searchData={handleChildData}/>
            <ImageList array={images}/>
        </div>
    );
}

export default App;