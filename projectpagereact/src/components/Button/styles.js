import Styled, { css } from 'styled-components';

const ButtonContainer = Styled.button`
    background: #565656;
    cursor: pointer;
    border-radius: 22px;
    position: relative;

    color: #FFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    
    ${
        ({ variant }) => variant !== 'primary' && css`
            min-width: 167px;
            height: 33px;

            background: #e4105d;

            &:hover {
                opacity: .6;
            }

            &::after {
                content: '';
                position: absolute;
                border: 1px solid #e4105d;
                top: -2px;
                left: -2px;
                width: calc(100% + 2px);
                height: calc(100% + 2px);
                border-radius: 22px;
            }
        `
    }
`;


export { ButtonContainer };