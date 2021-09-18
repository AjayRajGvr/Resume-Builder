/* eslint-disable default-case */
export const addDataAction = (value) => ({
  type: "ADD_DATA",
  value,
});

export const addSkillsAction = (value) => ({
  type: "ADD_SKILLS",
  value,
});

export const resetDataAction = () => ({
  type: "RESET_DATA",
});

export const resumeReducer = (state = { showResume: false }, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        ...action.value,
      };
    case "ADD_SKILLS":
      return {
        ...state,
        skillsList: action.value,
        showResume: true,
      };
    case "RESET_DATA":
      return {
        showResume: false,
      };
  }
  return state;
};

export default resumeReducer;
