import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import NasaCard from "./Components/NasaCard";
import Footer from "./Components/Footer";
import { Form, Button, Col, FormGroup, Input } from 'reactstrap';

const API_KEY = "CoLe1Uy668uIZaLABdLWafc3NvJCLjYb4CgWt6WU";
const API_URL = "https://api.nasa.gov/planetary/apod";

function App () {
  const [imageData, setImageData] = useState();
  const [date, setDate] = useState('');
  const [query, setQuery] = useState(`${API_URL}?api_key=${API_KEY}`);
  
  useEffect(() => {
    axios
      .get(query)
      .then(res => {
        const date = new Date();
        setImageData(res.data);
        setDate(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
      })
      .catch(err => console.log(err));
  }, [query]);

  const updateQuery = () => {
    console.log('button clicked');
    setQuery(`${API_URL}?api_key=${API_KEY}&date=${date}`);
  }

  return (
    <div className="App">
      <div>
        <SearchBar />
      </div>
      
      <Form>        
        <FormGroup row>
        <h4 className="changeDate">Date:</h4>
          <Col sm={4}>
            <Input onChange={(e)=> setDate(e.target.value)} type="date" name="date" id="date" data-date={date} />
          </Col>
          <Col>
            <Button onClick={()=> updateQuery()}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
      {imageData ? (       
      <NasaCard imageData={imageData} />
      ) : null}
     


      <Footer />
    </div>
  );
}

export default App;
