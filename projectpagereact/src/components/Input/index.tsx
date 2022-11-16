import { InputContainer, InputText, IconContainer, ErrorText } from './styles';

import { Controller } from 'react-hook-form';

import { IInput } from './types';

export function Input({ leftIcon, name, control, messageError, ...rest }: IInput) {
    return (
        <>
            <InputContainer>

                {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null};
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange} }) => <InputText value={value} onChange={onChange} {...rest} />}
                >

                </Controller>

            </InputContainer>

            { messageError ? <ErrorText>{messageError}</ErrorText> : null};

        </>

    );
};