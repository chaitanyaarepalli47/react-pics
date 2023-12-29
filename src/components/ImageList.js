import ImageShow from "./ImageShow";
import "./ImageList.css"

function ImageList({array}){
    const renderedImages = array.map((image) =>{
        return <ImageShow type = {image} key = {image.id}/>
    });
    return (
        <div className = 'image-list'>{renderedImages}</div>
        );
}

export default ImageList;