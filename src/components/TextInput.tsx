import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootProps {
    children: ReactNode,
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className='flex items-center h-12 gap-3 py-4 px-3 w-full rounded bg-gray-800 text-gray-100 text-xs placeholder:text-gray-400 focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
    children: ReactNode,
}

function TextInputIcon({ children }: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputDefault(props: TextInputProps) {
    return (
        <input className='bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400'
            {...props}
        />
    )
}
TextInputDefault.displayName = 'TextInput.Default'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputDefault,
    Icon: TextInputIcon,
}