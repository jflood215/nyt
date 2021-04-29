import React from "react";
import { Button, CardTitle, CardText, Card, CardBody } from 'reactstrap';

const NytResults = (props) => {
  return (
    <div>
      <div>
        {props.results.map((result) => {
          return (
            <div key={result._id}>
              <Card class="card">
              <CardBody>
               <CardTitle tag="h3">{result.headline.main}</CardTitle>
               </CardBody>
              {result.multimedia.length > 1 ? (
                <img
                  alt="article"
                  src={`http://www.nytimes.com/${result.multimedia[0].url}`}
                />
              ) : (
                ""
              )}
             <CardBody>
              <CardText>{result.snippet}</CardText>
             </CardBody>
              <a href={result.web_url}>
                <Button className="button-read">Read It</Button>
              </a>
              </Card>
            </div>
          );
        })}
        <div>
          <Button className="button-previous" outline color="dark" onClick={(e) => props.changePageNumber(e, "down")}>
            Previous 10
          </Button>
          <Button className="button-next" outline color="dark" onClick={(e) => props.changePageNumber(e, "up")}>
            Next 10
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NytResults;