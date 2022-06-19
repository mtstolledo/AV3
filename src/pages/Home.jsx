import { useState } from 'react';
import './styles.css'
import { FiSearch } from 'react-icons/fi'

import api from '../services/api';
import axios from 'axios';

function Home() {

    const [input,setInput] = useState('')
    const [cep, setCep] = useState({});

    async function handleSearch(){
        
        if(input === ''){
            alert("Preencha algum cep!")
            return;
        }

        try{
        
        const response = await api.get(`${input}/json`);
            setCep(response.data)
            setInput("");

        
    }catch{
        alert("Ops! Cep inválido");

    
        }  
 
       
     



    }
    return(

        <div className="container">
            <h1 className="title">Buscador de Cep</h1>
            
            <div className="containerInput">
             <input
             type="text"
             placeholder="Digite um Cep"
             value={input}
             onChange={(e) => setInput(e.target.value)}
             /> 

            <button className='buttonSearch' onClick={handleSearch}>
               <FiSearch size={25} color="#FFF" />  
            </button>



            </div>

           {Object.keys(cep).length > 0 &&(
            <main className="main">
                <h2>CEP : {cep.cep}</h2>

                <span>Logradouro: {cep.logradouro}</span>
                <span>Complemento: {cep.complemento}</span>
                <span>Bairro: {cep.bairro}</span>
                <span>Localidade: {cep.localidade} / {cep.uf}</span>
            </main>
           )} 
            

        </div>
    );

}

export default Home