import { render, waitFor } from "@testing-library/react";
import SimpleComponent from "./SimpleComponent";

describe("zad 1", () => {
  const data = {
    firstName: "John",
    lastName: "Doe",
  };

  let fetchSpy;
  beforeEach(() => {
    fetchSpy = jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(data),
    });
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  test("should render loading text", () => {
    const { getByText } = render(<SimpleComponent />);

    expect(getByText("Loading")).toBeInTheDocument();
  });

  test("should render loaded data", async () => {
    const { getByText } = render(<SimpleComponent />);

    expect(fetchSpy).toHaveBeenCalledWith("https://randomuser.me/api/");
    await waitFor(() =>
      expect(getByText(JSON.stringify(data))).toBeInTheDocument()
    );
  });

  test("should render after failure", async () => {
    fetchSpy.mockRejectedValue({ status: 500 });

    const { getByText } = render(<SimpleComponent />);

    expect(fetchSpy).toHaveBeenCalledWith("https://randomuser.me/api/");
    await waitFor(() => expect(getByText("Nothing")).toBeInTheDocument());
  });
});
