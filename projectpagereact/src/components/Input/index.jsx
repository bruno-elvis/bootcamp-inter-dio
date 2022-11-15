import { InputContainer, InputText, IconContainer, ErrorText } from './styles';

import { Controller } from 'react-hook-form';

export function Input({ leftIcon, name, control, messageError, ...rest }) {
    return (
        <>
            <InputContainer>

                {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <InputText {...field} {...rest} />}
                >

                </Controller>

            </InputContainer>

            { messageError ? <ErrorText>{messageError}</ErrorText> : null}

        </>

    );
};