import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { addDataAction } from "../../modules/reducer";
import { connect } from "react-redux";
import { withFormik, Form, FieldArray } from "formik";
import FormComponent from "../../components/form-field";
import { errorMsg } from "../../constants/error-messages";

const EducationDetails = (props) => {
  const { prevStep, values, handleChange, errors } = props;
  const eduInit = {
    institute: "",
    from: "",
    to: "",
    degree: "",
    description: "",
  };

  return (
    <Container fluid className="justify-content-center">
      <Form>
        <FieldArray
          name="educationDetails"
          render={(arrayHelpers) => (
            <div className="container-fluid">
              {values.educationDetails.map((item, index) => (
                <div key={index}>
                  <Card className="mx-auto mt-4 col-md-8">
                    <Card.Header as="h5">
                      Education {index + 1} {item.institute}
                      {index !== 0 && (
                        <Button
                          variant="warning"
                          className="float-right"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          Remove
                        </Button>
                      )}
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <FormComponent
                          component="input"
                          id={`educationDetails[${index}].institute`}
                          label="Institute name"
                          value={item.institute}
                          required={index === 0}
                          handleChange={handleChange}
                        />
                      </Card.Text>
                      <Card.Text>
                        <Row>
                          <Col>
                            <FormComponent
                              component="date"
                              id={`educationDetails[${index}].from`}
                              label="Start Date"
                              value={item.from}
                              handleChange={handleChange}
                            />
                          </Col>
                          <Col>
                            <FormComponent
                              component="date"
                              id={`educationDetails[${index}].to`}
                              label="End Date"
                              value={item.to}
                              handleChange={handleChange}
                            />
                          </Col>
                        </Row>
                      </Card.Text>
                      <Card.Text>
                        <FormComponent
                          component="input"
                          id={`educationDetails[${index}].degree`}
                          label="Degree / Course"
                          value={item.degree}
                          required={index === 0}
                          handleChange={handleChange}
                        />
                      </Card.Text>
                      <Card.Text>
                        <FormComponent
                          component="input"
                          id={`educationDetails[${index}].description`}
                          label="Description"
                          value={item.description}
                          required={index === 0}
                          handleChange={handleChange}
                        />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  {index === 0 && (
                    <div className="text-danger text-center ">
                      {errors.education}
                    </div>
                  )}
                </div>
              ))}
              <div className="container-fluid text-center">
                <Button
                  variant="primary"
                  size="lg"
                  className="mt-3 mb-1 ml-3 ml-md-4"
                  onClick={prevStep}
                >
                  Back
                </Button>
                <Button
                  variant="success"
                  size="lg"
                  className="mt-3 ml-3 mb-1 ml-md-4"
                  onClick={() => arrayHelpers.push(eduInit)}
                >
                  Add another education
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  className="mt-3 mb-1 ml-3 ml-md-4"
                  type="submit"
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        />
      </Form>
    </Container>
  );
};

const educationForm = withFormik({
  mapPropsToValues: (props) => {
    return {
      educationDetails: props?.resumeData.educationDetails
        ? props.resumeData.educationDetails
        : [
            {
              institute: "",
              from: "",
              to: "",
              degree: "",
              description: "",
            },
          ],
    };
  },
  enableReinitialize: true,
  validate: (values) => {
    const errors = {};
    const details = values.educationDetails[0];
    if (
      !details.institute.length ||
      !details.description.length ||
      !details.degree.length
    ) {
      errors.education = errorMsg.education;
    }
    return errors;
  },

  handleSubmit: (values, { props }) => {
    values.educationDetails = values.educationDetails.filter(
      (item) =>
        item.institute.length || item.degree.length || item.description.length
    );
    props.addPersonalData(values);
    props.nextStep();
  },
})(EducationDetails);

const mapStateToProps = (state) => ({
  resumeData: state.resumeData,
});

const mapDispatchToProps = (dispatch) => ({
  addPersonalData: (data) => dispatch(addDataAction(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(educationForm);
