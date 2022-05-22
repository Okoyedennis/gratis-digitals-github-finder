import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const baseURL =
  "https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc";
function App() {
  const [request, setRequest] = useState([])

  useEffect(() => {
    axios.get(
      baseURL
    ).then((resp) => {
      setRequest(resp.data.items)
    });
  }, [])
  console.log(request);
  return (
    <div className="container">
      {request.map((item) => (
        <div className="app" key={item.id}>
          <div className="logo">
            <img src={item.owner.avatar_url} alt="" />
          </div>
          <div className="app__content">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <div className="app__content-bottom">
              <div className="stars">{item.stargazers_count}</div>
              <div className="issue">{item.open_issues}</div>
              <p>Submited 30 days ago by {item.full_name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
