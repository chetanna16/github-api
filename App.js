import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import RepoDetails from "./RepoDetails.js";

function App() {
  const [orgName, setOrgName] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [details, setDetails] = useState({});
  const [detailsLoading, setDetailsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    searchRepos();
  }

  function searchRepos() {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/orgs/${orgName}/repos`,
    }).then((res) => {
      setLoading(false);
      setRepos(res.data);
    });
  }
  function renderRepo(repo) {
    return (
      <div className="row" key={repo.id} onClick={() => getDetails(repo.name)}>
        <h2 className="repo-name">{repo.name}</h2>
      </div>
    );
  }

  function getDetails(repoName) {
    setDetailsLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/repos/${orgName}/${repoName}`,
    }).then((res) => {
      setDetailsLoading(false);
      setDetails(res.data);
    });
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div className="landing-page-container">
          <div className="left-side">
            <form className="form">
              <input
                className="input"
                value={orgName}
                placeholder="search for organization"
                onChange={(e) => setOrgName(e.target.value)}
              />
              <button className="button" onClick={handleSubmit}>
                {loading ? "searching..." : "search"}
              </button>
            </form>
            <div className="results-container">{repos.map(renderRepo)}</div>
          </div>
          <RepoDetails details={details} loading={detailsLoading} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
