import React from "react";
 import { render ,screen} from "@testing-library/react";
import Message from "./message";
describe("main file", () => {
    test("text message", () => {
        render(<Message></Message>)
        const testmsg = screen.getByText("Text Message", { exact: false })
        expect(testmsg).toBeInTheDocument()
        
    })
})


