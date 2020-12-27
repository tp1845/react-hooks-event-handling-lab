import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import EyesOnMe from "../components/EyesOnMe";

beforeEach(() => {
  render(<EyesOnMe />);
});

test('displays a button with the text "Eyes on me"', () => {
  expect(screen.queryByText(/Eyes on me/)).toBeInTheDocument();
});

test("focusing the button triggers console output", () => {
  console.log = jest.fn();

  const button = screen.queryByText(/Eyes on me/);
  fireEvent.focus(button);

  expect(console.log).toHaveBeenCalled();
  expect(console.log.mock.calls[0][0]).toBe("Good!");
});

test("removing focus (blur) on the button triggers console output", () => {
  console.log = jest.fn();

  const button = screen.queryByText(/Eyes on me/);
  fireEvent.blur(button);

  expect(console.log).toHaveBeenCalled();
  expect(console.log.mock.calls[0][0]).toBe("Hey! Eyes on me!");
});
