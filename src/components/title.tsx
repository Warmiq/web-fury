
import * as React from 'react';
import styled from 'styled-components';

import * as Theme from '../styles/theme';

interface TitleProps {
    title: string;
    className?: string;
}

const UnstyledTitle: React.StatelessComponent<TitleProps> = (props) => {

    return (
        <h1 className={props.className}>
            {props.title}
        </h1>
    );
};

export const Title = styled(UnstyledTitle) `   
    color: ${ Theme.LIGHT_GRAY};
`;

export const SubTitle = styled(UnstyledTitle) `
    font-weight: lighter;
    font-style: italic;
    color: ${Theme.LIGHT_GRAY};
`;