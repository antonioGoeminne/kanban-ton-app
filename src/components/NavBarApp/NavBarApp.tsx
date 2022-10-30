import { Navbar } from "@mantine/core"
import { ButtonCreateNewBoard } from "../createBoards/buttonCreateNewBoard"

export const NavBarApp = () => {
    return (
        <Navbar width={{ base: 300 }} height={'100vh'} p="xs">
            <ButtonCreateNewBoard />
        </Navbar>
    )
}