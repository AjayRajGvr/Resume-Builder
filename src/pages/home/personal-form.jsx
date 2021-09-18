import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import FormComponent from "../../components/form-field";
import { withFormik, Form } from "formik";
import { addDataAction } from "../../modules/reducer";
import { connect } from "react-redux";
import * as Yup from "yup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { errorMsg } from "../../constants/error-messages";

const PersonalDetails = (props) => {
  const { values, errors, touched, handleChange } = props;
  return (
    <Container fluid className="justify-content-center">
      <Form>
        <div className="container-fluid">
          <Card className="mx-auto mt-4  col-md-8">
            <Card.Header as="h5">Personal Info</Card.Header>
            <Card.Body>
              <Card.Text>
                <FormComponent
                  component="input"
                  id="fullName"
                  label="Full Name"
                  required={true}
                  value={values.fullName}
                  handleChange={handleChange}
                  touched={touched.fullName}
                  errors={errors.fullName}
                />
              </Card.Text>
              <Card.Text>
                <FormComponent
                  component="input"
                  id="email"
                  label="Email Address"
                  required={true}
                  value={values.email}
                  handleChange={handleChange}
                  touched={touched.email}
                  errors={errors.email}
                />
              </Card.Text>
              <Card.Text>
                <FormComponent
                  component="input"
                  id="phone"
                  label="Phone Number"
                  required={true}
                  value={values.phone}
                  handleChange={handleChange}
                  touched={touched.phone}
                  errors={errors.phone}
                />
              </Card.Text>
              <Card.Text>
                <Row>
                  <Col>
                    <FormComponent
                      component="input"
                      id="address"
                      label="Address"
                      value={values.address}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <FormComponent
                      component="input"
                      id="city"
                      label="City"
                      value={values.city}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <FormComponent
                      component="input"
                      id="state"
                      label="State"
                      value={values.state}
                      handleChange={handleChange}
                    />
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              className="mt-3 mb-1 ml-3 ml-md-4"
              type="submit"
            >
              Next
            </Button>
          </div>
        </div>{" "}
      </Form>
    </Container>
  );
};

const personalForm = withFormik({
  mapPropsToValues: (props) => {
    return {
      fullName: props.resumeData?.fullName || "",
      email: props.resumeData?.email || "",
      phone: props.resumeData?.phone || "",
      address: props.resumeData?.address || "",
      city: props.resumeData?.city || "",
      state: props.resumeData?.state || "",
    };
  },
  enableReinitialize: true,
  validationSchema: Yup.object({
    fullName: Yup.string().required(errorMsg.nameRequired),
    email: Yup.string()
      .email(errorMsg.emailInvalid)
      .required(errorMsg.emailRequired),
    phone: Yup.string()
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        errorMsg.phoneInvalid
      )
      .required(errorMsg.phoneRequired),
  }),

  handleSubmit: (values, { props }) => {
    props.addPersonalData(values);
    props.nextStep();
  },
})(PersonalDetails);

const mapStateToProps = (state) => ({
  resumeData: state.resumeData,
});

const mapDispatchToProps = (dispatch) => ({
  addPersonalData: (data) => dispatch(addDataAction(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(personalForm);
