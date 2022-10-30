export const appValidations = () => {

    const validations = {
        title: (value: string) => !value ? 'Title is required' : value.length > 30 ? 'Title is too large' : null,
        description: (value: string) => value.length > 80 ? 'Description is too large' : null,
        subTasks: { text: (value: string) => !value ? 'Text is required' : value.length > 30 ? 'Text is too large' : null }
    }

    return validations;
}