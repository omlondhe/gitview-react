import axios from "axios";
import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

function Repos({ repos_url }) {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await axios.get(repos_url, "");
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <ListGroup>
      {repos.map((repo, index) => (
        <ListGroupItem key={repo.id}>
          <div className="text-primary">{repo.name}</div>
          <div className="text-secondary">{repo.language}</div>
          <div className="text-info">{repo.description}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default Repos;
