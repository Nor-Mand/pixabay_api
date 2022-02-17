import React, { useState, useEffect } from 'react';
import Form from "./components/Form";

function App() {

    const [ search, setSearch ] = useState('');

    useEffect(() => {
    const consultApi = async () => {
        if(search === '') return;

        const imagesPerPage = 10;
        const key = '12751283-f3e8e27ec56266412b79257af';
        const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}`;

        const answer = await fetch(url);
        const result = await answer.json()

        setSearch(result.hits);
    }
    consultApi();
    }, [search])

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Search your image...</p>
      </div>
        <Form setSearch={setSearch}/>
    </div>
  );
}

export default App;
