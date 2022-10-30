import React from 'react'
import { Button, Group, Header, Title } from "@mantine/core"
import { TbLayoutKanban } from 'react-icons/tb'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { ModalApp } from "./utils/ModalApp";
import { useModal } from "../hooks/useModal";
import { CreateTask } from './forms/CreateTask';

export const HeaderApp = () => {

    const [modalIsVisible, toggleModalVisibility] = useModal();
    const modalContent: React.ReactNode = (<CreateTask />);

    return (
        <Header height={70} p="xs" sx={{ display: 'flex', justifyContent: 'space-between' }}><Group><TbLayoutKanban fontSize={30} /><Title order={2}>Kanban Ton App</Title></Group>
            <Group>
                <Button
                    onClick={toggleModalVisibility}
                    styles={(theme) => ({
                        root: {
                            backgroundColor: theme.colors.brand[0],
                            border: 0,
                            height: 42,
                            paddingLeft: 20,
                            paddingRight: 20,

                            '&:hover': {
                                backgroundColor: theme.fn.darken(theme.colors.brand[0], 0.2),
                            },
                        },
                    })}
                >
                    + Add new task
                </Button>
                <HiOutlineDotsVertical />
            </Group>
            <ModalApp title='Create a new task!' modalContent={modalContent} isVisible={modalIsVisible} toggleVisibility={toggleModalVisibility} />
        </Header >
    )
}