import { render, screen } from "@testing-library/react";
import Login from "./auth";
import { Button, Card } from "react-bootstrap";
import userEvent from "@testing-library/user-event";

describe("auth", () => {
    test("button", () => {
        render(<Login></Login>)

        const buttonname = screen.queryByText("looding...",{exact:false})
        expect(buttonname).toBeNull()
    })
    test("tset2", () => {
        render(<Button></Button>)

        //const buttonval = screen.getByRole("button")
       // userEvent.click(buttonval)

        const value = screen.queryByText("Have an account? login", { exact: false })
        expect(value).toBeNull()
    })
    test("test3", () => {
        render(<Card.Title></Card.Title>)

        const text = screen.getByText("log in", { exact: false })
        expect(text).toBeInTheDocument()
    })
    
})