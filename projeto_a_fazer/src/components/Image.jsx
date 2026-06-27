function Image( src ){
    if (!src){
        return "https://http.cat/400"
    }
    return <img 
        className="Image"
        src={src}
        alt = "Imagem do status code"
    />;
}

export default Image;