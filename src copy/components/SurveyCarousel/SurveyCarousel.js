import React, { useState } from "react";
import { Grid, Box, Button } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import styles from "./SurveyCarousel.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const questionsList = [
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
];
export default (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState(questionsList);

  return (
    <>
      {currentIndex < questions.length ? (
        <Grid container className={styles.main}>
          <Grid
            item
            sm={6}
            className={styles.left}
            display={"flex"}
            flexDirection={"column"}
            style={{ padding: "0px 40px" }}
          >
            <Box style={{ textAlign: "left", paddingTop: "20px" }} flexGrow={0}>
              <LogoDevIcon
                style={{ color: "white", fontSize: "44px", textAlign: "left" }}
              />
            </Box>

            <Box flexGrow={1} display={"flex"} alignItems={"center"}>
              <Grid
                container
                direction="column"
                justifyContent="stretch"
                alignItems="center"
                width={"50px"}
              >
                {[...Array(questions.length + 1)].map((e, i) =>
                  i == currentIndex ? (
                    <CircleIcon
                      onClick={() => setCurrentIndex(i)}
                      className={styles.circle}
                    />
                  ) : (
                    <CircleOutlinedIcon
                      onClick={() => setCurrentIndex(i)}
                      className={styles.circle}
                    />
                  )
                )}
              </Grid>

              <TransitionGroup className="slider-wrapper">
                <CSSTransition
                  key={currentIndex}
                  timeout={500}
                  classNames="carousel-slide"
                >
                  <h1 className={styles.surveyTitle}>
                    {questions[currentIndex].question}
                  </h1>
                </CSSTransition>
              </TransitionGroup>
            </Box>
          </Grid>
          <Grid
            item
            sm={6}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            style={{ padding: "0px 40px" }}
          >
            <TransitionGroup className="slider-wrapper">
              <CSSTransition
                key={currentIndex}
                timeout={500}
                classNames="carousel-slide"
              >
                <Box
                  display={"flex"}
                  justifyContent={"space-around"}
                  className={styles.surveyOptionsContainer}
                >
                  {questions[currentIndex].options.map((option, optionIdx) => {
                    return (
                      <Box
                        className={`${styles.surveyOptionContainer} ${
                          questions[currentIndex].selectedOption == optionIdx
                            ? styles.active
                            : ""
                        }`}
                        onClick={() => {
                          let updatedQestions = [...questions];
                          updatedQestions[currentIndex].selectedOption =
                            optionIdx;
                          setQuestions(updatedQestions);
                        }}
                      >
                        <p className={styles.surveyOptionEmoji}>
                          {" "}
                          {option.emoji}
                        </p>
                        <p className={styles.surveyOptionText}>
                          {" "}
                          {option.title}
                        </p>
                      </Box>
                    );
                  })}
                </Box>
              </CSSTransition>
            </TransitionGroup>
          </Grid>
        </Grid>
      ) : (
        <Grid container className={styles.main}>
          <Grid
            item
            sm={6}
            className={styles.left}
            display={"flex"}
            flexDirection={"column"}
            style={{ padding: "0px 40px" }}
          >
            <Box style={{ textAlign: "left", paddingTop: "20px" }} flexGrow={0}>
              <LogoDevIcon
                style={{ color: "white", fontSize: "44px", textAlign: "left" }}
              />
            </Box>

            <Box flexGrow={1} display={"flex"} alignItems={"center"}>
              <Grid
                container
                direction="column"
                justifyContent="stretch"
                alignItems="center"
                width={"50px"}
              >
                {[...Array(questions.length + 1)].map((e, i) =>
                  i == currentIndex ? (
                    <CircleIcon
                      onClick={() => setCurrentIndex(i)}
                      className={styles.circle}
                    />
                  ) : (
                    <CircleOutlinedIcon
                      onClick={() => setCurrentIndex(i)}
                      className={styles.circle}
                    />
                  )
                )}
              </Grid>

              <TransitionGroup className="summary-wrapper">
                <CSSTransition
                  key={currentIndex}
                  timeout={700}
                  classNames="summary-slide"
                >
                  <Box>
                    <h1 style={{ color: "white" }}>Summary</h1>

                    {questions.map((q) => {
                      return (
                        <Box display={"flex"}>
                          <h1 className={styles.summaryQuestion} flexGrow={1}>
                            {q.question}
                          </h1>
                          <h1
                            className={styles.summarySelectedOption}
                            style={{ width: "100px" }}
                          >
                            {q.options[q.selectedOption]?.emoji}
                          </h1>
                        </Box>
                      );
                    })}

                    <Button variant="contained" style={{color: '#6b54fe', background: 'white', borderRadius: '25px'}}>
                      Submit
                    </Button>
                  </Box>
                </CSSTransition>
              </TransitionGroup>
            </Box>
          </Grid>
          <Grid
            item
            sm={6}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            style={{ padding: "0px 40px" }}
          ></Grid>
        </Grid>
      )}
    </>
  );
};
