import {
  InputGroup,
  Input,
  Button,
  Container,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import CustomCarousel from "./CustomCarousel";

const SearchBar = () => {
  const preventDefault = (event) => event.preventDefault();

  const data = [
    "Buy",
    "Rent",
    "New Projects",
    "PG",
    "Plots",
    "Commercial",
    "Post Free Property Ad",
  ];
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} sm={9} className="mt-5">
            <div className="text-center">
              <h2>Welcome back! Let’s continue your search</h2>
            </div>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                typography: "body1",
                "& > :not(style) ~ :not(style)": {
                  ml: 2,
                },
              }}
              className="mt-5"
              onClick={preventDefault}
            >
              {data.map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  underline="hover"
                  sx={{
                    color: "black",
                    "&:hover": {
                      color: "inherit",
                      textDecorationColor: "red",
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
              ;
            </Box>

            <Container
              className="rounded-pill px-0 py-2 mt-3"
              style={{ border: "solid" }}
            >
              <InputGroup>
                <Input
                  className="rounded-pill"
                  style={{ border: "0px" }}
                ></Input>
                <div className="d-flex">
                  <UncontrolledDropdown className="mx-3" direction="down">
                    <DropdownToggle caret color="Light">
                      Flats
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Home/Villa</DropdownItem>
                      <DropdownItem>Plot</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown className="mx-3" direction="down">
                    <DropdownToggle caret color="Light">
                      Budget
                    </DropdownToggle>
                    <DropdownMenu>
                      {/* <DropdownItem header>Home/Villa</DropdownItem> */}
                      <Row>
                        <Col>
                          <Input className="rounded-pill " placeholder="min" />
                        </Col>
                        <Col>
                          <Input className="rounded-pill" placeholder="max" />
                        </Col>
                      </Row>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <Button className="rounded-pill mx-1 px-5 py-3" color="danger">
                  Search
                </Button>
              </InputGroup>
            </Container>
          </Col>
          <Col xs={12} sm={3} className="my-5">
            <div>
              <Container>
                <CustomCarousel />
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchBar;
