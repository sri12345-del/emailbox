import { render ,screen} from "@testing-library/react"
import Inbox from "./inbox"

test("test render", () => {
    render(<Inbox></Inbox>)

    const name = screen.getByText("Name")
    expect(name).toBeInTheDocument()
})