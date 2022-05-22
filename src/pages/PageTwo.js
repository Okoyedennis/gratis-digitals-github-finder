import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from '../component/Spinner';
import Footer from '../component/Footer';
const baseURL =
  "https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc";

const PageTwo = () => {
       const [request, setRequest] = useState([]);
       const [isLoading, setIsLoading] = useState(true);


       useEffect(() => {
         axios.get(`${baseURL}&page=2`).then((resp) => {
           setRequest(resp.data.items);
           setIsLoading(false);
         });
       }, []);
       console.log(request);
  return (
    <div>
      {isLoading ? (<Spinner />) : (

      <div className="container">
        {request.map((item) => (
          <>
            <div className="app" key={item.id}>
              <div className="logo">
                <img src={item.owner.avatar_url} alt="" />
              </div>
              <div className="app__content">
                <h2>{item.name}</h2>
                <p className="description">{item.description}</p>
                <div className="app__content-bottom">
                  <div className="stars">
                    <p>Stars: {item.stargazers_count}</p>
                  </div>
                  <div className="issue">
                    <p>Issues: {item.open_issues}</p>
                  </div>
                  <p>
                    Submited 30 days ago by <strong>{item.owner.login}</strong>
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </>
        ))}
        <Footer />
      </div>
      )}
    </div>
  );
}

export default PageTwo