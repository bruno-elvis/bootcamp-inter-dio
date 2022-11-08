import { ButtonContainer } from './styles';

export function Button({ title, variant = 'primary', onClick }) {
    return (
        <ButtonContainer variant={variant} onClick={onClick}>
            {title}
        </ButtonContainer>

    );

};