import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(
    "TODO: Monaco Solicitors React Coding Test"
  );
  expect(linkElement).toBeInTheDocument();
});
