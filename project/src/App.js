import React, {  useState,useEffect } from 'react';
import ListaImagenes from "./components/ListaImagenes";
import Form from "./components/Form";

const App = () => {

    const [ buscar, setBuscar ] = useState('');
    const [ imagenes, setImagenes ] = useState([]);

    useEffect(() => {
        const ConsultaApi = async () => {

            const pagina = 20;
            const key = '12751283-f3e8e27ec56266412b79257af';
            const url = `https://pixabay.com/api/?key=${key}&q=${buscar}&${pagina}`

            const consultar = await fetch(url);
            const responder = await consultar.json();

            setImagenes(responder.hits)
        }
        ConsultaApi();
    })

    return(
        <div className="container">
            <div className="jumbotron">
                <Form setBuscar={setBuscar}/>
            </div>
            <div className="row justify-content-center">
                <ListaImagenes
                    imagenes = {imagenes}
                />
            </div>
        </div>
    )
}

export default App;