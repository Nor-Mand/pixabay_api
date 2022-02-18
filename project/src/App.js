import React, { useState, useEffect } from 'react';
import Form from "./components/Form";
import ImagenList from "./components/ImagenList";

const App = () =>{

    const [ search, setSearch ] = useState('');
    const [ images, setImages ] = useState([]);

    useEffect(() => {
        const consultAPI = async () => {
            if(search === '')return;

            const page = 30;
            const key = '22371955-bd696d8033c91c985e45d1bd2';
            const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${page}`;

            const getRequest = await fetch(url)
            const getAnswer = await getRequest.json();

            setImages(getAnswer.hits);

        }
        consultAPI();
    },[search])


    return(
        <div className="container">
            <div className="jumbotron">
                <Form setSearch={setSearch} />
            </div>
            <div className="row">
                <ImagenList images={images} />
            </div>
        </div>
    )
}

export default App;