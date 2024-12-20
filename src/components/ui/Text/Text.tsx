'use client';
import React from 'react';
import { customClassSwitcher } from '~/core';

// Can be rendered as p, label, div, span, etc.
// TODO: Add as prop support
// TODO: Add a core reusable function to check and render an as prop

const COMPONENT_NAME = 'Text';

export type TextProps = {
    children: React.ReactNode;
    customRootClass?: string;
    className?: string;
} & React.ComponentProps<'p'>;

const Text = ({ children, customRootClass = '', className = '', ...props }: TextProps) => {
    const rootClass = customClassSwitcher(customRootClass, COMPONENT_NAME);

    return <p className={`${rootClass} ${className}`} {...props}>{children}</p>;
};

Text.displayName = COMPONENT_NAME;

export default Text;
