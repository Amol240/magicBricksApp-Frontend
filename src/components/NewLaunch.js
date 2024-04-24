import { Container, Row, Col, Button } from "reactstrap";

const NewLaunch = () => {
  return (
    <Container className="my-5">
      <div
        className="text-center "
        style={{
          background:
            "linear-gradient(to bottom, #f2fbfc 1%, rgba(242, 251, 252, 0))",
          position: "relative",
          padding: "28px",
          marginTop: "30px",
        }}
      >
        <p>New Launch</p>
        <h4>magicHomes</h4>
        <strong>Encyclopedia For All New Projects</strong>
      </div>
      <Container className="my-4">
        <Row>
          <Col
            xs={12}
            sm={4}
            style={{
              boxShadow: "0 10px 20px 0 rgba(0,0,0,0.05)",
              border: "solid 2px #fff",
              borderRadius: "24px",
              backgroundClip: "padding-box",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              background:
                "linear-gradient(to bottom, #dff6f9 13%, #c8f9ff), linear-gradient(to bottom, #fff, #fff 98%)",
            }}
          >
            Directory for All New Projects
          </Col>

          <Col
            xs={12}
            sm={4}
            style={{
              boxShadow: "0 10px 20px 0 rgba(0,0,0,0.05)",
              border: "solid 2px #fff",
              borderRadius: "24px",
              backgroundClip: "padding-box",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              background: "linear-gradient(to bottom, #ffe6e8, #ffccd1)",
            }}
          >
            All Reports from RERA
          </Col>
          <Col
            xs={12}
            sm={4}
            style={{
              boxShadow: "0 10px 20px 0 rgba(0,0,0,0.05)",
              border: "solid 2px #fff",
              borderRadius: "24px",
              backgroundClip: "padding-box",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              background: "linear-gradient(to bottom, #fff8e6, #fff1c7)",
            }}
          >
            Expert Reviews & Advice
          </Col>
        </Row>
      </Container>
      <Button className="rounded-pill my-3 py-2 btn btn-danger mx-auto d-block">
        View All New projects
      </Button>
    </Container>
  );
};

export default NewLaunch;
