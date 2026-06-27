function Image({ src = "https://http.cat/404" }){
    return <img
        className="image"
        src={src}
        alt="Imagem do status code"
    />;
}

export default Image;