import surveyReducer, {
  submitSurvey,
  setCurrentIndex,
  selectOption,
} from "./surveySlice";

describe("survey reducer", () => {
  const initialState = {
    questions: [
      {
        question: "How was your week?",
        options: [
          {
            emoji: "👎",
            score: 1,
            title: "Don't like it",
          },
          {
            emoji: "🤔",
            score: 2,
            title: "Not sure",
          },
          {
            emoji: "👍",
            score: 3,
            title: "Like it",
          },
        ],
      },

      {
        question: "How was your week 2?",
        options: [
          {
            emoji: "👎",
            score: 1,
            title: "Don't like it",
          },
          {
            emoji: "🤔",
            score: 2,
            title: "Not sure",
          },
          {
            emoji: "👍",
            score: 3,
            title: "Like it",
          },
        ],
      },

      {
        question: "How was your week 3?",
        options: [
          {
            emoji: "👎",
            score: 1,
            title: "Don't like it",
          },
          {
            emoji: "🤔",
            score: 2,
            title: "Not sure",
          },
          {
            emoji: "👍",
            score: 3,
            title: "Like it",
          },
        ],
      },
      {
        question: "How was your week 4?",
        options: [
          {
            emoji: "👎",
            score: 1,
            title: "Don't like it",
          },
          {
            emoji: "🤔",
            score: 2,
            title: "Not sure",
          },
          {
            emoji: "👍",
            score: 3,
            title: "Like it",
          },
        ],
      },
      {
        question: "How was your week 5?",
        options: [
          {
            emoji: "👎",
            score: 1,
            title: "Don't like it",
          },
          {
            emoji: "🤔",
            score: 2,
            title: "Not sure",
          },
          {
            emoji: "👍",
            score: 3,
            title: "Like it",
          },
        ],
      },
      {
        question: "How was your week 6?",
        options: [
          {
            emoji: "👎",
            score: 1,
            title: "Don't like it",
          },
          {
            emoji: "🤔",
            score: 2,
            title: "Not sure",
          },
          {
            emoji: "👍",
            score: 3,
            title: "Like it",
          },
        ],
      },
    ],
    currentIndex: 0,

    submitting: false,
    submitted: false,
    error: null,
  };

  it("should handle initial state", () => {
    expect(surveyReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle setCurrentIndex", () => {
    const actual = surveyReducer(initialState, setCurrentIndex(1));
    expect(actual.currentIndex).toEqual(1);
  });

  it("should handle selectOption", () => {
    const actual = surveyReducer(
      initialState,
      selectOption({ questionIndex: 0, optionIndex: 1 })
    );
    expect(actual.questions[0].selectedOption).toEqual(1);
  });

  it("should handle submitSurvey fulfilled", () => {
    const initialState = {
      submitting: true,
      submitted: false,
      error: null,
    };
    const payload = "Survey submitted successfully";
    const action = submitSurvey.fulfilled(payload);
    const state = surveyReducer(initialState, action);
    expect(state.submitting).toEqual(false);
    expect(state.submitted).toEqual(true);
    expect(state.error).toBeNull();
  });

  it("should handle submitSurvey rejected", () => {
    const initialState = {
      submitting: true,
      submitted: false,
      error: null,
    };
    const error = "Submission failed";
    const action = submitSurvey.rejected(new Error(error));
    const state = surveyReducer(initialState, action);
    expect(state.submitting).toEqual(false);
    expect(state.submitted).toEqual(false);
    expect(state.error).toEqual(error);
  });
});
