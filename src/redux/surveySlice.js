// src/redux/surveySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

export const submitSurvey = createAsyncThunk(
  "survey/submitSurvey",
  async (_, { getState }) => {
    const { questions } = getState().survey;
    const response = await fetch(
      "https://6693c8e9c6be000fa07d3161.mockapi.io/digitalify/survey",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(questions),
      }
    );
    return response.json();
  }
);

const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
    selectOption: (state, action) => {
      const { questionIndex, optionIndex } = action.payload;
      state.questions[questionIndex].selectedOption = optionIndex;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitSurvey.fulfilled, (state, action) => {
      state.submitting = false;
      state.submitted = true;
      state.error = null;

      window.location.reload();
    });
    builder.addCase(submitSurvey.rejected, (state, action) => {
      state.submitting = false;
      state.submitted = false;
      state.error = action.error.message;
    });
  },

  
});

export const { setCurrentIndex, selectOption } = surveySlice.actions;

export const selectCurrentIndex = (state) => state.survey.currentIndex;
export const selectQuestions = (state) => state.survey.questions;

export default surveySlice.reducer;
