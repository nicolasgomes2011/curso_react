import './App.css';
import Title from './components/Title';
import Input from './components/Input';
import Button from './components/Button';
import Image from './components/Image';
import { useState } from 'react';

function App(){

    const [input, setInput] = useState("")
    const [url, setUrl] = useState("https://http.cat/400")

    function getImageFromCode(){
        const code = input
        // alert(code)
        if (code) {
            setUrl(`https://http.cat/${code}`)
        }else{
            setUrl('https://http.cat/400')
        }
    }

    return <div className='container'>
        <header className='header'>
            <Title> Status Pet </Title>
        </header>
        <div className='search'>
            <Input value={input} onChange={setInput} />
            <Button onClick={getImageFromCode}> Buscar </Button>
        </div>

        <main className='main'>
            <Image src={url} />
        </main>
       
    </div>;
}

export default App;