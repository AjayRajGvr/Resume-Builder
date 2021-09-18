import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { addSkillsAction, addDataAction } from "../../modules/reducer";
import { connect } from "react-redux";
import { withFormik, Form, FieldArray } from "formik";
import FormComponent from "../../components/form-field";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { errorMsg } from "../../constants/error-messages";
import { skillItems } from "../../constants/skill-list";

const SkillDetails = (props) => {
  const { prevStep, values, handleChange, errors, setFieldValue } = props;
  const [skill, setSkill] = useState("");

  const handleOnSearch = (string, results) => {
    setSkill(string);
  };

  const handleOnSelect = (item) => {
    const length = values.skillsList.length;
    setFieldValue((values.skillsList[length] = item.name));
    setSkill("");
  };

  const addSkill = () => {
    if (skill.length) {
      const length = values.skillsList.length;
      setFieldValue((values.skillsList[length] = skill));

      setSkill("");
    }
  };

  return (
    <Container fluid className="justify-content-center">
      <Form>
        <FieldArray
          name="skillsList"
          render={(arrayHelpers) => (
            <div className="container-fluid">
              <Card className="mx-auto mt-4 col-md-7 justify-content-center">
                <Card.Header as="h5">Skills</Card.Header>
                <Card.Body>
                  <Row className="mb-4">
                    <Col xs={8} md={9}>
                      <ReactSearchAutocomplete
                        items={skillItems}
                        onSearch={handleOnSearch}
                        onSelect={handleOnSelect}
                        inputSearchString={skill}
                        autoFocus
                        styling={{ zIndex: 2 }}
                      />
                    </Col>
                    <Col>
                      <Button
                        variant="success"
                        className="mt-1"
                        onClick={addSkill}
                      >
                        Add
                      </Button>
                    </Col>
                  </Row>
                  {values.skillsList.map((item, index) => (
                    <div key={index}>
                      <Row>
                        <Col xs={8} md={9}>
                          <Card.Text>
                            <FormComponent
                              component="input"
                              id={`skillsList[${index}]`}
                              value={item}
                              handleChange={handleChange}
                              readOnly={true}
                            />
                          </Card.Text>
                        </Col>
                        <Col xs={4} md={2}>
                          <Button
                            variant="warning"
                            className="float-right"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            Remove
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ))}
                </Card.Body>
              </Card>
              <div className="text-danger text-center ">
                {errors.skillsList}
              </div>
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

const SkillForm = withFormik({
  mapPropsToValues: (props) => {
    return {
      skillsList: props?.resumeData.skillsList
        ? props.resumeData.skillsList
        : [],
    };
  },
  enableReinitialize: true,
  validateOnChange: true,
  validate: (values) => {
    const errors = {};
    if (!values.skillsList.length) {
      errors.skillsList = errorMsg.skillRequired;
    }
    return errors;
  },

  handleSubmit: (values, { props }) => {
    values.skillsList = values.skillsList.filter((item) => item.trim() !== "");
    props.addSkillsAction(values.skillsList);
    props.history.push("/view");
  },
})(SkillDetails);

const mapStateToProps = (state) => ({
  resumeData: state.resumeData,
});

const mapDispatchToProps = (dispatch) => ({
  addSkillsAction: (data) => dispatch(addSkillsAction(data)),
  addPersonalData: (data) => dispatch(addDataAction(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SkillForm);
