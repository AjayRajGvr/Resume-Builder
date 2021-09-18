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

const experienceDetails = (props) => {
  const { prevStep, values, handleChange, errors } = props;
  const experienceInit = {
    company: "",
    from: "",
    to: "",
    designation: "",
    description: "",
  };

  return (
    <Container fluid className="justify-content-center">
      <Form>
        <FieldArray
          name="experienceDetails"
          render={(arrayHelpers) => (
            <div className="container-fluid">
              {values.experienceDetails.map((item, index) => (
                <div key={index}>
                  <Card className="mx-auto mt-4 col-md-8">
                    <Card.Header as="h5">
                      Experience {index + 1} {item.company}
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
                          id={`experienceDetails[${index}].company`}
                          label="Company name"
                          value={item.company}
                          required={index === 0}
                          handleChange={handleChange}
                        />
                      </Card.Text>
                      <Card.Text>
                        <Row>
                          <Col>
                            <FormComponent
                              component="date"
                              id={`experienceDetails[${index}].from`}
                              label="Start Date"
                              value={item.from}
                              handleChange={handleChange}
                            />
                          </Col>
                          <Col>
                            <FormComponent
                              component="date"
                              id={`experienceDetails[${index}].to`}
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
                          id={`experienceDetails[${index}].designation`}
                          label="designation"
                          value={item.designation}
                          required={index === 0}
                          handleChange={handleChange}
                        />
                      </Card.Text>
                      <Card.Text>
                        <FormComponent
                          component="input"
                          id={`experienceDetails[${index}].description`}
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
                      {errors.experience}
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
                  onClick={() => arrayHelpers.push(experienceInit)}
                >
                  Add another Experience
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

const experienceForm = withFormik({
  mapPropsToValues: (props) => {
    return {
      experienceDetails: props?.resumeData.experienceDetails
        ? props.resumeData.experienceDetails
        : [
            {
              company: "",
              from: "",
              to: "",
              designation: "",
              description: "",
            },
          ],
    };
  },
  enableReinitialize: true,
  validate: (values) => {
    const errors = {};
    const details = values.experienceDetails[0];
    if (
      !details.company.length ||
      !details.description.length ||
      !details.designation.length
    ) {
      errors.experience = errorMsg.experience;
    }
    return errors;
  },

  handleSubmit: (values, { props }) => {
    values.experienceDetails = values.experienceDetails.filter(
      (item) =>
        item.company.length ||
        item.designation.length ||
        item.description.length
    );
    props.addPersonalData(values);
    props.nextStep();
  },
})(experienceDetails);

const mapStateToProps = (state) => ({
  resumeData: state.resumeData,
});

const mapDispatchToProps = (dispatch) => ({
  addPersonalData: (data) => dispatch(addDataAction(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(experienceForm);
