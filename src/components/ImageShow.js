
function ImageShow({type}){
    return <div>
        <img src={type.urls.small} alt = {type.alt_description}/>
    </div>
}

export default ImageShow;