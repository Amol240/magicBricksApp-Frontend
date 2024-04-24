import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  List,
  ListInlineItem,
  Dropdown,
  Row,
  Col,
  Container,
} from "reactstrap";

const CustomNavbar = () => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const navToggle = () => setIsOpen(!isOpen);

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navToggle = () => setIsOpen(!isOpen);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const closeDropdown = () => setIsDropdownOpen(false);

  const nearByCities = ["Thane", "Navi Mumbai", "Nagpur", "Mumbai"];
  const popularCities = [
    "Ahmedabad",
    "Bangalore",
    "Chennai",
    "Gurgaon",
    "Hyderabad",
    "Indore",
    "Jaipur",
    "Kolkata",
    "Lucknow",
    "Mumbai",
    "Navi Mumbai",
    "New Delhi",
    "Noida",
    "Pune",
    "Thane",
  ];

  return (
    <div>
      <Navbar
        className="px-5 py-0"
        color="danger"
        danger
        expand="sm"
        fixed="top"
      >
        <NavbarBrand className="px-5 py-0" style={{ color: "white" }} href="/">
          <h3>magicbricks</h3>
        </NavbarBrand>
        <NavbarToggler onClick={navToggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown
              nav
              inNavbar
              onMouseOver={toggleDropdown}
              onMouseLeave={closeDropdown}
              isOpen={isDropdownOpen}
            >
              <DropdownToggle nav caret style={{ color: "white" }}>
                Pune
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <h3>INDIA</h3>
                </DropdownItem>
                <DropdownItem>
                  <strong>Nearby Cities</strong>
                  <List type="inline">
                    {nearByCities.map((item, index) => (
                      <ListInlineItem>{item}</ListInlineItem>
                    ))}
                  </List>
                </DropdownItem>
                <DropdownItem>
                  <strong>Popularcities</strong>
                  {popularCities.map((item, index) => (
                    <li>{item}</li>
                  ))}
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{ color: "white" }}>
                MB Prime
              </DropdownToggle>
              <DropdownMenu right>
                <List type="inline">
                  <ListInlineItem>
                    {" "}
                    Contact upto 30 Owners directly
                  </ListInlineItem>
                  <ListInlineItem>
                    Access to Prime Exclusive Properties
                  </ListInlineItem>
                </List>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{ color: "white" }}>
                Login
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  My Activity <DropdownItem divider />
                </DropdownItem>
                <DropdownItem>
                  Searches <DropdownItem divider />
                </DropdownItem>
                <DropdownItem>Recommendation</DropdownItem>
                <DropdownItem>Myprofile</DropdownItem>
                <DropdownItem divider />
                <Button className="" color="danger">
                  Login
                </Button>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Button
            style={{ marginLeft: "10px" }}
            className="rounded-pill py-0.5"
            color="light"
            size="sm"
          >
            {" "}
            <span style={{ marginRight: "10px" }}>Post Property</span>
            <Button className="rounded-pill px-4 py-0" color="warning">
              FREE
            </Button>
          </Button>
        </Collapse>
      </Navbar>

      <Container className="">
        <Row className=" p-5">
          <Col xs={1}>
            <UncontrolledDropdown className="mx-3" direction="down">
              <DropdownToggle caret color="Light">
                Buy
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
          <Col xs={1}>
            <UncontrolledDropdown className="mx-1" direction="down">
              <DropdownToggle caret color="light">
                Rent
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
          <Col xs={1}>
            <UncontrolledDropdown className="mx-3" direction="down">
              <DropdownToggle caret color="light">
                Sell
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
          <Col xs={2}>
            <UncontrolledDropdown className="mx-5" direction="down">
              <DropdownToggle caret color="light">
                Home Loans
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
          <Col xs={2}>
            <UncontrolledDropdown className="mx-5" direction="down">
              <DropdownToggle caret color="light">
                Property Service
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
          <Col xs={3}>
            <UncontrolledDropdown className="mx-5" direction="down">
              <DropdownToggle caret color="light">
                <span style={{ marginRight: "10px" }}>MB Advice</span>
                <Button className="rounded-pill px-1 py-0" color="warning">
                  New
                </Button>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
          <Col xs={2}>
            <UncontrolledDropdown className="mx-5" direction="down">
              <DropdownToggle caret color="light">
                Help
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CustomNavbar;
