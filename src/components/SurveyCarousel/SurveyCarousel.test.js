import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import SurveyCarousel from "./SurveyCarousel";

describe("SurveyCarousel Component", () => {
  test("renders survey questions correctly", () => {
    const { container, getByText } = render(
      <Provider store={store}>
        {" "}
        <SurveyCarousel />{" "}
      </Provider>
    );

    expect(getByText("How was your week?")).toBeInTheDocument();

    const navigationCircles =
      container.getElementsByClassName("navigation-circle");

    fireEvent.click(navigationCircles[2]);
    expect(getByText("How was your week 3?")).toBeInTheDocument();
  });

  test("handles option selection correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        {" "}
        <SurveyCarousel />{" "}
      </Provider>
    );

    fireEvent.click(getByText("Don't like it"));
  });

  test("handles click on navigation circles", () => {
    const { container, getByText } = render(
      <Provider store={store}>
        {" "}
        <SurveyCarousel />{" "}
      </Provider>
    );

    fireEvent.click(container.getElementsByClassName("navigation-circle")[1]);

    expect(getByText("How was your week 2?")).toBeInTheDocument();
  });
});
