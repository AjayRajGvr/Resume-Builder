import React from "react";
import Form from "react-bootstrap/Form";

const InputField = (props) => {
  const {
    touched,
    errors,
    value,
    placeholder,
    id,
    readOnly,
    handleChange,
    label,
    required,
  } = props;
  return (
    <div className="mb-1">
      {label && (
        <Form.Label className="font-weight-bold">
          {label}
          {required ? <div className="text-danger d-inline"> *</div> : ""}
        </Form.Label>
      )}
      <Form.Control
        type="text"
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        readOnly={readOnly}
      />
      <ErrorMessageComponent id={id} errors={errors} touched={touched} />
    </div>
  );
};

const DateField = (props) => {
  const {
    touched,
    errors,
    value,
    placeholder,
    id,
    handleChange,
    label,
    required,
  } = props;
  return (
    <div>
      <Form.Label className={"font-weight-bold"}>
        {label}
        {required ? "*" : ""}
      </Form.Label>
      <Form.Control
        type="date"
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <ErrorMessageComponent id={id} errors={errors} touched={touched} />
    </div>
  );
};

const ErrorMessageComponent = (props) => {
  if (props.touched && props.errors) {
    return <div className="text-danger">{props.errors}</div>;
  } else {
    return <div>{""}</div>;
  }
};

const FormComponent = (props) => {
  const { component, ...rest } = props;
  switch (component) {
    case "input":
      return InputField({ ...rest });
    case "date":
      return DateField({ ...rest });
    default:
      return null;
  }
};

export default FormComponent;
