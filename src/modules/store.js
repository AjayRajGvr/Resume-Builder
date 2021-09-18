import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./reducer";

export default configureStore({
  reducer: {
    resumeData: resumeReducer,
  },
});
