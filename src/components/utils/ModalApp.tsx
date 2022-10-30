import { Modal } from '@mantine/core';
import React from 'react'

type ModalProps = {
    isVisible: any;
    toggleVisibility: () => void;
    title: string;
    modalContent: React.ReactNode;
};

export const ModalApp = ({ isVisible, toggleVisibility, modalContent, title }: Readonly<ModalProps>): JSX.Element | null => {
    const modal: JSX.Element = (
        <Modal
            size='sm'
            opened={isVisible}
            onClose={toggleVisibility}
            title={title}
            styles={(theme) => ({root:{top:'100px'}})}
        >
            {modalContent}
        </Modal>
    )
    return modal
}