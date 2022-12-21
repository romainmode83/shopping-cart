import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  
import userEvent from "@testing-library/user-event";

import Home from "../Home/Home";


describe('Home Component', () => {
    it("renders the display heading", () => {
        render(<Home/>);
        expect(screen.getByText("We're selling cats.")).toBeInTheDocument();
    });
    it('renders the call to action text', () => {
        render(<Home/>);
        expect(screen.getByText(/buy them/i)).toBeInTheDocument();
    })
});