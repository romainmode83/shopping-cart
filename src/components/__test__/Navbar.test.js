import React from "react";
import MainNav from "../Navbar/Navbar";
import { render, screen } from "@testing-library/react"
import {BrowserRouter, Link, Route, Routes, useLocation} from 'react-router-dom';
import CartContext from '../CartContext';

it("Navbar.brand renders", () => {
    const { Navbar} = render(<MainNav />, {wrapper: BrowserRouter});
    const brand = screen.getByText(/CatSaver/i);
    expect(brand).toBeInTheDocument();

})

