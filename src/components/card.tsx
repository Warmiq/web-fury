import * as React from 'react';
import styled from 'styled-components';
import * as Theme from '../styles/theme';

interface CardProps {
    title?: string;
    header?: JSX.Element;
}

class UnstyledCard extends React.Component<CardProps> {

    public render(): JSX.Element {

        return (
            <div className="card-container">
                <div className="card-header">
                    {this.props.title}
                </div>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

// TODO: Them styles need finishing here
export const Card = styled(UnstyledCard) `

display:flex;

.card-container {    
    box-shadow: 0 4px 6px 0 hsla(0,0%,0% 0.2)
    flex-direction: column;
    background-color: ${Theme.GRAY};    
}
`;