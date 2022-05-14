import React, { useEffect, useState } from "react";
import "./Home.css";

import { useParams, useNavigate } from "react-router-dom";

import { Col, Row } from "react-bootstrap";

import Cards from "../../Components/Card/Cards";
import Landing from "../Landing/Landing";
import Loading from "../../Components/Loading/Loading";
import NoResult from "../NoResult/NoResult";

import { mockRes } from "../../utils/constants/mockRes";

const Home = () => {
  let { search } = useParams();
  let navigate = useNavigate();
  const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${process.env.REACT_APP_YT_API}`;

  const [loading, setLoading] = useState(false);
  const [isResultEmpty, setIsResultEmpty] = useState(null);
  const [searchResult, setSearchResult] = useState([]);

  const fetchSearch = async () => {
    try {
      setIsResultEmpty(null);
      setLoading(true);
      const searchRes = await fetch(URL, {
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      });
      if (searchRes.status === 403) {
        alert("You have exceeded your search quota");
        navigate("/");
        window.location.reload();
      }
      const searchData = await searchRes.json();
      console.log(searchData);
      setSearchResult(searchData.items);
      setIsResultEmpty(searchData.items.length ? null : 0);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search === undefined ? setSearchResult([]) : fetchSearch();
  }, [search]);

  return (
    <>
      <div className="home">
        {searchResult.length === 0 ? (
          loading ? (
            <Loading />
          ) : isResultEmpty === 0 ? (
            <NoResult />
          ) : (
            <Landing />
          )
        ) : loading ? (
          <Loading />
        ) : (
          <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="g-3">
            {searchResult.map((result) => (
              <Col key={result.id.videoId}>
                <Cards
                  videoId={result.id.videoId}
                  thumbnail={result.snippet.thumbnails.high.url}
                  title={result.snippet.title}
                  description={result.snippet.description}
                />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </>
  );
};

export default Home;
