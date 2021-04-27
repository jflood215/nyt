import React from "react";
import { Button } from 'reactstrap';

const NytResults = (props) => {
  return (
    <div>
      <div>
        {props.results.map((result) => {
          return (
            <div key={result._id}>
              <h2>{result.headline.main}</h2>
              {result.multimedia.length > 1 ? (
                <img
                  alt="article"
                  src={`http://www.nytimes.com/${result.multimedia[1].url}`}
                />
              ) : (
                ""
              )}
              <p>
                {result.snippet}
              </p>
              <a href={result.web_url}>
                <Button className="button-read">Read It</Button>
              </a>
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