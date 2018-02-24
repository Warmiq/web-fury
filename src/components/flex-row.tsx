import * as  React from 'react';

import styled from 'styled-components';

interface RowProps {
    className?: string;
}

const Row: React.StatelessComponent<RowProps> =
    (props) => {

        return (
            <div className={props.className}>
                {props.children}
            </div>
        );
    };

export const FlexRow = styled(Row) `
    flex-direction: row-reverse;
`;