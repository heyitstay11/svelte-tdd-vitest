import VerticalTabs from "./VerticalTabs.svelte";
import { render, screen, fireEvent } from "@testing-library/svelte";

// describe("VerticalTabs Component", () => {
//   test("should render the component", () => {
//     const host = document.createElement("div");
//     document.body.appendChild(host);
//     const instance = new VerticalTabs({ target: host });
//     expect(instance).toBeTruthy();
//     expect(host.innerHTML).toContain("First Tab Heading");
//   });
// });

describe("VerticalTabs Component", () => {
  test("should render the component", () => {
    render(VerticalTabs);
    const firstTabNode = screen.getByText(/First Tab Heading/i);
    expect(firstTabNode).toBeTruthy();
  });

  test("Should switch tabs", async () => {
    render(VerticalTabs);
    const secondTabElement = screen.getByText(/Second Tab/i);
    fireEvent.click(secondTabElement);
    await screen.findByText(/Second Tab Heading/i);
  });
});
