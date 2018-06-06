import * as React from 'react';
import styled from 'styled-components';

// import * as Theme from '../styles/theme';

interface MateProps {
    name: string;
    img: string;
    quote: string | JSX.Element;
    className?: string;
    inactive: boolean;
}

class Person extends React.Component<MateProps, {}> {

    public render(): JSX.Element {

        return (
            <div className={this.props.className}>
                <img className="img" src={this.props.img} alt="logo" />
                <div className="name">{this.props.name}</div>
                <div className="quote">{this.props.quote}</div>
            </div>
        );
    }
}

export const GuildMate = styled(Person) `

flex-direction: column;
margin-top: ${props => props.name === 'Flip' ? '0px' : '20px'};
margin-right ${props => props.name === 'Flip' ? '40px' : '20px'};
opacity: ${props => props.inactive ? '0.33' : '1'};
transform: ${props => props.name === 'Flip' ? 'rotate(-72deg);' : ''};

.name {
    font-weight: bold;
}

.img {
    border-radius: 50%;
    height: 150px;
}

.quote {
    font-style: italic;
}
`;
