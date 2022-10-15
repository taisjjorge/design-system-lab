import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from "./Button";

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Enviar',
    },

    argTypes: {},

} as Meta<ButtonProps>

//export da variante
export const Default: StoryObj<ButtonProps> = {}
