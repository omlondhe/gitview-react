import React, { useState, useContext, Fragment } from "react";
import axios from "axios";

import { Row, Container, Col, Input, Button, InputGroup } from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

function Home() {
  const userContext = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${query}`);
      const data = response.data;
      setUser(data);
    } catch (error) {
      toast("Not able to locate user!", { type: "error" });
    }
  };

  if (!userContext?.user?.uid) return <Navigate replace to="signin" />;
  return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Please provide the username"
            />
            <Button color="primary" onClick={fetchDetails}>
              Fetch User
            </Button>
          </InputGroup>
          {user ? <UserCard user={user} /> : <Fragment></Fragment>}
        </Col>
        <Col md="7">
          {user ? <Repos repos_url={user.repos_url} /> : <Fragment></Fragment>}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
