import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Agents from "../data/Agents";

const AgentsCards = () => {
  const agentsIds = Object.keys(Agents);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Container className="mt-5">
      <h3>MB Preferred Agents in Pune</h3>
      <div className="mt-3">
        <Slider {...settings}>
          {agentsIds.map((id) => {
            const item = Agents[id];
            return (
              <div key={id}>
                <Card
                  className="hover-card"
                  style={{ transition: "transform 0.3s", width: "18rem" }}
                >
                  <Row
                    style={{
                      width: "100%",
                      margin: "0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: "#dff6f9",
                      borderRadius: "8px 8px 0 0",
                      padding: "11px 10px 15px 10px",
                    }}
                  >
                    <Col xs={12} sm={3}>
                      <CardImg top width="100%" src={item.image} />
                    </Col>
                    <Col xs={12} sm={9}>
                      <CardText>
                        <strong>{item.name}</strong>
                      </CardText>
                    </Col>
                  </Row>
                  <CardBody>
                    <Row>
                      <Col xs={2}>
                        <CardImg top width="100%" src={item.logo} />
                      </Col>
                      <Col xs={5}>
                        <CardText>
                          <strong>{item.company}</strong>
                        </CardText>
                        {item.year}
                      </Col>
                      |
                      <Col xs={3}>
                        <CardText>{item.buyer}</CardText>
                        {item.buyerNo}
                      </Col>
                    </Row>
                    <CardText
                      divider
                      style={{ borderTop: "1px solid rgba(0, 0, 0, 0.1)" }}
                    />
                    <Row>
                      <Col xs={12} sm={6}>
                        {item.sale}
                        <CardText>Properties for sale</CardText>
                      </Col>
                      <Col xs={12} sm={6}>
                        {item.rent}
                        <CardText>Properties for Rent</CardText>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>
    </Container>
  );
};

export default AgentsCards;

