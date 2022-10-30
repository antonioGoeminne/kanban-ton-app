import { AppShell } from "@mantine/core"
import { HeaderApp } from "./HeaderApp"
import { NavBarApp } from "./NavBarApp/NavBarApp"

export const LayoutWrapper = () => {

    return (
        <AppShell
            padding="md"
            navbar={<NavBarApp />}
            header={<HeaderApp />}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            {/* Your application here */}
        </AppShell >
    )
}