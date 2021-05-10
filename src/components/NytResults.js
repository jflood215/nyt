import React from "react";
import { Button, CardTitle, CardText, Card, CardBody } from 'reactstrap';

const NytResults = (props) => {
  return (
    <div>
      <div>
        {props.results.map((result) => {
          return (
            <div key={result._id}>
              <Card className="card">
              <CardBody>
               <CardTitle tag="h3">{result.headline.main}</CardTitle>
               </CardBody>
              {result.multimedia.length > 1 ? (
                <img
                  height="90%"
                  width="90%"
                  style={{margin: 'auto'}}
                  alt="article"
                  src={`http://www.nytimes.com/${result.multimedia[1].url}`}
                />
              ) : (
                <img
                height="90%"
                width="90%"
                style={{margin: 'auto'}}
                alt="article"
                src="https://imgur.com/Yh784b0.png"
                />
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
      </div>
    </div>
  );
};

export default NytResults;