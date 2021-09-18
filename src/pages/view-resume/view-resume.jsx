import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { resetDataAction } from "../../modules/reducer";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import TemplateOne from "../../components/template1/template";
import TemplateTwo from "../../components/template2/template";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const ViewResume = (props) => {
  const { showResume, resetData, data, name } = props;
  const history = useHistory();
  const fileName = name?.length ? `Resume-${name}` : "Resume";

  return (
    <>
      <Container fluid className="justify-content-center">
        <h2>View Resume</h2>
        {showResume && (
          <Col>
            <Row className="justify-content-center">
              <Card className="text-center">
                <Card.Body>
                  <PDFViewer width="300px" height="400px" showToolbar={false}>
                    <TemplateOne data={data} />
                  </PDFViewer>
                </Card.Body>
                <Card.Footer>
                  <PDFDownloadLink
                    document={<TemplateOne data={data} />}
                    fileName={fileName}
                  >
                    {({ loading }) =>
                      loading ? "Loading document..." : "Download now!"
                    }
                  </PDFDownloadLink>
                </Card.Footer>
              </Card>
              <Card className="text-center mt-3 mt-sm-0 ml-md-3">
                <Card.Body>
                  <PDFViewer width="300px" height="400px" showToolbar={false}>
                    <TemplateTwo data={data} />
                  </PDFViewer>
                </Card.Body>
                <Card.Footer>
                  <PDFDownloadLink
                    document={<TemplateTwo data={data} />}
                    fileName={fileName}
                  >
                    {({ loading }) =>
                      loading ? "Loading document..." : "Download now!"
                    }
                  </PDFDownloadLink>
                </Card.Footer>
              </Card>
            </Row>
            <Row className="mt-3 justify-content-center">
              <Button onClick={() => history.push("/")}>Edit Resume</Button>
              <Button
                onClick={() => {
                  resetData();
                  history.push("/");
                }}
                className="ml-2"
              >
                Create New Resume
              </Button>
            </Row>
          </Col>
        )}
        {!showResume && (
          <>
            <div>You have not created a resume. click below to create one</div>
            <Button
              onClick={() => {
                resetData();
                history.push("/");
              }}
            >
              Create New Resume
            </Button>
          </>
        )}
      </Container>
    </>
  );
};
const mapStateToProps = (state) => ({
  showResume: state.resumeData.showResume,
  data: state.resumeData,
  name: state.resumeData.fullName,
});
const mapDispatchToProps = (dispatch) => ({
  resetData: (data) => dispatch(resetDataAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewResume);
