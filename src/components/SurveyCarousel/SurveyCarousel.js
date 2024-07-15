import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Box, Button } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  selectCurrentIndex,
  selectQuestions,
  setCurrentIndex,
  selectOption,
  submitSurvey,
} from "../../redux/surveySlice";
import styles from "./SurveyCarousel.module.css";

const SurveyCarousel = () => {
  const dispatch = useDispatch();
  const currentIndex = useSelector(selectCurrentIndex);
  const questions = useSelector(selectQuestions);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async () => {
    try {
      dispatch(submitSurvey());
      setSuccessMessage("Survey submitted successfully!");
    } catch (error) {
      console.error("Failed to submit survey:", error);
    }
  };

  return (
    <Grid container className={styles.main}>
      {currentIndex < questions.length ? (
        <>
          <Grid
            item
            sm={6}
            className={styles.left}
            display="flex"
            flexDirection="column"
            style={{ padding: "0px 40px" }}
          >
            <Box style={{ textAlign: "left", paddingTop: "20px" }} flexGrow={0}>
              <LogoDevIcon style={{ color: "white", fontSize: "44px" }} />
            </Box>
            <Box flexGrow={1} display="flex" alignItems="center">
              <Grid
                container
                direction="column"
                alignItems="center"
                width="50px"
              >
                {[...Array(questions.length + 1)].map((e, i) =>
                  i === currentIndex ? (
                    <CircleIcon
                      key={i}
                      onClick={() => dispatch(setCurrentIndex(i))}
                      className={`${styles.circle} navigation-circle`}
                    />
                  ) : (
                    <CircleOutlinedIcon
                      key={i}
                      onClick={() => dispatch(setCurrentIndex(i))}
                      className={`${styles.circle} navigation-circle`}
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
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            style={{ padding: "0px 40px" }}
          >
            <TransitionGroup className="slider-wrapper">
              <CSSTransition
                key={currentIndex}
                timeout={500}
                classNames="carousel-slide"
              >
                <Box
                  display="flex"
                  justifyContent="space-around"
                  className={styles.surveyOptionsContainer}
                >
                  {questions[currentIndex].options.map((option, optionIdx) => (
                    <Box
                      key={optionIdx}
                      className={`${styles.surveyOptionContainer} ${
                        questions[currentIndex].selectedOption === optionIdx
                          ? styles.active
                          : ""
                      }`}
                      onClick={() =>
                        dispatch(
                          selectOption({
                            questionIndex: currentIndex,
                            optionIndex: optionIdx,
                          })
                        )
                      }
                    >
                      <p className={styles.surveyOptionEmoji}>{option.emoji}</p>
                      <p className={styles.surveyOptionText}>{option.title}</p>
                    </Box>
                  ))}
                </Box>
              </CSSTransition>
            </TransitionGroup>
          </Grid>
        </>
      ) : (
        <Grid container className={styles.main}>
          <Grid
            item
            sm={6}
            className={styles.left}
            display="flex"
            flexDirection="column"
            style={{ padding: "0px 40px" }}
          >
            <Box style={{ textAlign: "left", paddingTop: "20px" }} flexGrow={0}>
              <LogoDevIcon style={{ color: "white", fontSize: "44px" }} />
            </Box>
            <Box flexGrow={1} display="flex" alignItems="center">
              <Grid
                container
                direction="column"
                alignItems="center"
                width="50px"
              >
                {[...Array(questions.length + 1)].map((e, i) =>
                  i === currentIndex ? (
                    <CircleIcon
                      key={i}
                      onClick={() => dispatch(setCurrentIndex(i))}
                      className={`${styles.circle} navigation-circle`}
                    />
                  ) : (
                    <CircleOutlinedIcon
                      key={i}
                      onClick={() => dispatch(setCurrentIndex(i))}
                      className={`${styles.circle} navigation-circle`}
                    />
                  )
                )}
              </Grid>
              <TransitionGroup className="summary-wrapper">
                <CSSTransition
                  key={currentIndex}
                  timeout={7000}
                  classNames="summary-slide"
                >
                  <Box>
                    <h1 style={{ color: "white" }}>Summary</h1>
                    {questions.map((q, index) => (
                      <Box key={index} display="flex">
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
                    ))}
                    <Button
                      variant="contained"
                      style={{
                        color: "#6b54fe",
                        background: "white",
                        borderRadius: "25px",
                      }}
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                    {successMessage && (
                      <div style={{ color: "white", margin: "10px" }}>
                        {successMessage}
                      </div>
                    )}
                  </Box>
                </CSSTransition>
              </TransitionGroup>
            </Box>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default SurveyCarousel;
