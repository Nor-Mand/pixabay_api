import React, { useState, useEffect } from 'react';
import Form from "./components/Form";
import ListImages from "./components/ListImages";

function App() {

    const [ search, setSearch ] = useState('');
    const [ imgs, setImg ] = useState([]);

    useEffect(() => {
    const consultApi = async () => {
        if(search === '') return;

        const imagesPerPage = 10;
        const key = '12751283-f3e8e27ec56266412b79257af';
        const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}`;

        const answer = await fetch(url);
        const result = await answer.json()

        setImg(result.hits);
    }
    consultApi();
    }, [search])

  return (
      <div className="container">
          <div className="jumbotron">
              <p className="lead text-center">Search your image...</p>
              <Form setSearch={setSearch}/>
          </div>
          <div className="row">
              <ListImages
                  images={imgs}
              />
          </div>
      </div>
  );
}

export default App;
