import { fireEvent, render, screen } from "@testing-library/react";
import { Weather } from "./weather";

test('check search', () => {
    render(<Weather />);
    const input = screen.getByPlaceholderText(/search for cities/i) as any;
    fireEvent.change(input, {target: {value: 'erode'}});
    expect(input?.value).toEqual('erode');
});