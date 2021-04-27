import React, { useState } from "react";
import NytResults from "./NytResults";
import { Button, Col, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import Pic from "../assets/newyorktimes2.png"
const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

const NytApp = () => {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [results, setResults] = useState([]);
  const fetchResults = () => {

    let url = `${baseURL}?api-key=${process.env.REACT_APP_API_KEY}&page=${pageNumber}&q=${search}`;
    url = startDate ? url + `&begin_date=${startDate}` : url;
    url = endDate ? url + `&end_date=${endDate}` : url;

    console.log(process.env);

    fetch(url)
      .then((res) => res.json())
      .then((data) => setResults(data.response.docs))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchResults();
  };

  const changePageNumber = (event, direction) => {
    event.preventDefault();
    if (direction === "down") {
      if (pageNumber > 0) {
        setPageNumber(pageNumber + 1);
        fetchResults();
      }
    }

    if (direction === "up") {
      setPageNumber(pageNumber + 1);
      fetchResults();
    }
  };

  return (
    <div className="main">
        <img src={Pic} alt="New York Times Logo" width="45%" height="45%"/>
      <div className="mainDiv">
        <Form className="form" onSubmit={(e) => handleSubmit(e)}>
        <FormGroup>
        <Label for="Search">Search</Label>
          <Input
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          </FormGroup>
          <Row form>
              <Col md={6}>
          <FormGroup>
          <Label for="startDate">Start Date</Label>
          <Input
            type="date"
            name="startDate"
            pattern="[0-9]{8}"
            onChange={(e) => setStartDate(e.target.value)}
          />
          </FormGroup>
          </Col>
          <Col md={6}>
          <FormGroup>
          <Label for="endDate">End Date</Label>
          <Input
            type="date"
            name="endDate"
            pattern="[0-9]{8}"
            onChange={(e) => setEndDate(e.target.value)}
          />
          </FormGroup>
         </Col>
         </Row>
          <FormGroup>
          <Button className="submit" color="dark">Find Articles</Button>
        </FormGroup>
        </Form>
        {results.length > 0 ? (
          <NytResults results={results} changePageNumber={changePageNumber} />
        ) : null}
      </div>
    </div>
  );
};

export default NytApp;