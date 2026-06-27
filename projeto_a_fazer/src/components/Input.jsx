function Input({ value, onChange }){

    function handleChange(event){
        // event.preventDefult();
        onChange(event.target.value);
    }
    return <input
        className="input" type="text"
        value={value} 
        onChange={handleChange}
    /> 
}

export default Input;