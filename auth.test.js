import { render, screen } from "@testing-library/react";
import Login from "./auth";

describe("auth", () => {
    test("button", () => {
        render(<Login></Login>)

        const buttonname = screen.queryByText("looding...",{exact:false})
        expect(buttonname).toBeNull()
    })
    
})