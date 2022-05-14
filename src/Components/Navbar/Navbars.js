import { useEffect, useState } from "react";
import {
  Container,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import yt from "../../Resources/Images/yt.svg";

const Navbars = () => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    searchInput.length > 2 ? navigate(`/${searchInput}`) : navigate("/");
  }, [searchInput]);

  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={yt}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            YouTube Clone
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <InputGroup className="">
                <FormControl
                  type="search"
                  placeholder="Search Videos"
                  // className="me-2"
                  aria-label="Search"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <InputGroup.Text id="basic-addon2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </InputGroup.Text>
              </InputGroup>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
