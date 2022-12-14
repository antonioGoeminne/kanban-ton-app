import { useState } from 'react'

export const useModal = () => {
    const [modalIsVisible, setModalIsVisible] = useState<Boolean>(false)
    const toggleModalVisibility = () => setModalIsVisible(!modalIsVisible)

    return [modalIsVisible, toggleModalVisibility] as const;
}