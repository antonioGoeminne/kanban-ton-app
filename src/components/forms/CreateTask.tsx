import { Badge, Button, Center, Group, Select, Stack, Text, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { forwardRef } from 'react';
import { appValidations } from './appValidations';
import { randomId } from '@mantine/hooks';
import { MdDelete } from 'react-icons/md'

export const CreateTask = () => {

    const initialValues = {
        title: '',
        description: '',
        subTasks: [{ text: '' }],
        kanbanState: '',
    }

    const form = useForm({
        initialValues: {
            ...initialValues
        },

        validate: {
            ...appValidations()
        },
    });

    const fields =
        form.values.subTasks.map((x, index) =>
            <Group>
                <TextInput
                    sx={{ width: '86%', paddingLeft: 5 }}
                    placeholder='e.g make new coffee'
                    {...form.getInputProps(`subTasks.${index}.text`)}
                />
                <MdDelete onClick={() => form.removeListItem('subTasks', index)} fontSize={25} style={{ cursor: 'pointer', border: '1px solid white', padding: 2, borderRadius: 4 }} />
            </Group>
        )

    const kanbanStates = [
        {
            value: 'Todo',
            label: 'To do',
            color: 'green',
        },

        {
            value: 'doing',
            label: 'Doing',
            color: 'blue',
        },
        {
            value: 'done',
            label: 'Done',
            color: 'yellow',
        },
    ];

    interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
        image: string;
        label: string;
        description: string;
    }

    const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
        ({ label, color, ...others }: ItemProps, ref) => (
            <div ref={ref} {...others}>
                <Group noWrap>
                    <Badge color={color}  />
                    <Text size="sm">{label}</Text>
                </Group>
            </div>
        )
    );


    return (

        <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
                label="Title"
                placeholder="e.g Take coffee break"
                {...form.getInputProps('title')}
            />
            <Textarea
                placeholder="Add a description"
                label="Description"
                {...form.getInputProps('description')}
            />
            <Stack spacing={5}>
                <Text sx={{ marginTop: 7 }}>Sub-tasks</Text>
                {fields.length > 0 ?
                    <>
                        {fields}
                    </>
                    :
                    <Text color='#ccc'>Ups , there is nothing here</Text>
                }
                <Button sx={{ margin: 6, background: '#fff', color: 'black' }} onClick={() => form.insertListItem('subTasks', { text: '', key: randomId() })}>Add new sub-task</Button>
            </Stack>
            <Select
                label="Task state"
                placeholder="Pick one"
                itemComponent={SelectItem}
                data={kanbanStates}
                filter={(value, item) =>
                    item.label?.toLowerCase().includes(value.toLowerCase().trim())
                }
                {...form.getInputProps('kanbanState')}
            />
            <Center sx={{ marginTop: 20 }}><Button styles={(theme) => ({
                root: {
                    background: theme.colors.brand[0],
                    '&:hover': {
                        backgroundColor: theme.fn.darken(theme.colors.brand[0], 0.2),
                    },
                }
            })} sx={{ width: '95%' }} type="submit">Submit</Button></Center>
        </form>
    )
}