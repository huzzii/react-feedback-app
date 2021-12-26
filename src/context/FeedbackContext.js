import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedBackEdit, setFeedBackEdit] = useState({
      item: {},
      edit: false
  })

  const deleteFeedback = (id) => {
    if (window.confirm("Are You Sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) => {
    setFeedBackEdit({
        item: item,
        edit: true
    })
  }

  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback, editFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
