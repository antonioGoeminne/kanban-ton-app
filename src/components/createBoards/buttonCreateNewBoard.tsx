import { Button, Group, Text } from "@mantine/core"
import { BsKanban } from 'react-icons/bs'

export const ButtonCreateNewBoard = () => {
    return (
        <Group>
            <Button styles={(theme) => ({ label: { color: theme.colors.brand[0] } , leftIcon:{color: theme.colors.brand[0]}})} leftIcon={<BsKanban />}>
                create new board +
            </Button>
        </Group>
    )
}