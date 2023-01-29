
import React from 'react';

type IconSize = LooseAutoComplete<'sm' | 'md'>;

// give you autocomplete on custom type but allows all strings... 
type LooseAutoComplete<T extends string> = T | Omit<string, T>;

interface IconProps {
    size: IconSize;
}

export const Icon = (props: IconProps) => {
    return <></>;
}

const Test = () => {
    return (
        <>
            <Icon size='sm' />
            <Icon size='something' />
        </>
    )
} 