import React, { useState } from "react";
import PersonalDetails from "./personal-form";
import EducationDetails from "./education-form";
import ExperienceDetails from "./work-form";
import ProgressBar from "react-bootstrap/ProgressBar";
import SkillForm from "./skill-form";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [step, setStep] = useState(1);
  const history = useHistory();

  const prevStep = () => {
    if (step !== 1) setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <>
      <h2 className="ml-3">Resume Builder</h2>
      <ProgressBar now={step * 25} />
      {step === 1 && <PersonalDetails nextStep={nextStep} />}
      {step === 2 && (
        <EducationDetails nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 3 && (
        <ExperienceDetails prevStep={prevStep} nextStep={nextStep} />
      )}
      {step === 4 && <SkillForm prevStep={prevStep} history={history} />}
    </>
  );
};

export default Home;
