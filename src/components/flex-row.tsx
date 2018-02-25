import * as  React from 'react';

import styled from 'styled-components';

interface RowProps {
    className?: string;
}

const Base: React.StatelessComponent<RowProps> =
    (props) => {

        return (
            <div className={props.className}>
                {props.children}
            </div>
        );
    };

export const FlexRowCentered = styled(Base) `
  display:flex;
  flex-direction:row;
  justify-content: centered;  
`;

export const FlexRow = styled(Base) `  
    display:flex;     
    flex-direction: row;
    justify-content: centered;
`;

export const FlexColumn = styled(Base) `
    align-self: flex-end;    
    align-items: flex-end;
`;

export const FlexReverseRow = styled(Base) `
  
    flex-direction: row-reverse;
`;
