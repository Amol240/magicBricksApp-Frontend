import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, CardText } from "reactstrap";

const Cards = () => {
  const cardInformation = [
    "Properties listed for you",
    "Get personalised property recommendations from us",
    "Top Handpicked Projects for you",
    "Top Exclusive Owner Properties",
  ];

  return (
    <Container className="mt-5">
      <h3>Because you searched Pune</h3>
      <Row className="mt-3">
        {cardInformation.map((item, index) => (
          <Col key={index} sm={6} md={3}>
            <Card
              style={{
                width: "18rem",
                height: "9rem",
                border: "solid 1px rgba(255, 199, 44, 0.4)",
                backgroundColor: "rgba(255, 247, 225, 0.4)",
              }}
            >
              <CardBody>
                {index === 0 ? (
                  <>
                    <CardText>
                      <span
                        style={{
                          fontSize: "32px",
                          fontWeight: "600",
                          background:
                            "-webkit-linear-gradient(#d8232a, #ffc72c)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        11K+
                      </span>
                      <strong>{item}</strong>
                    </CardText>
                    <Link style={{ color: "red" }}>Continue last search</Link>
                  </>
                ) : (
                  <>
                    <CardText>
                      <strong>{item}</strong>
                    </CardText>
                    <Link style={{ color: "red" }}>See all</Link>
                  </>
                )}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
