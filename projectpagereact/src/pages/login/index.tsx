import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { reqApi } from '../../services/api';

//Types
import { IFormData } from './types';

//yup
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

//Components
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

//styles
import { Column, Container, CreateText, LostText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';
import { MdEmail, MdPassword } from 'react-icons/md';

export function Login() {
    // Definição do esquema de validação do formulário com yup
    const schema = yup.object({
        email: yup.string().email('Por favor, digite um e-mail válido').required('Campo obrigatório'), //espera-se uma string no formato de e-mail, sendo obrigatória
        password: yup.string().min(4, 'Sua senha deve conter no mínimo 4 caracteres').required('Campo obrigatório'), //espera-se uma string, que tenha no minimo 4 caracteres, sendo obrigatória
    }).required();

    // Definição do controle de formulário de login com "react-hook-form"
    const { control, handleSubmit, formState: { errors } } = useForm<IFormData> ({
        resolver: yupResolver(schema),
        mode: 'onChange' //validar o schema do resolver no evento de onChange
    });

    // Definição de "navigate" para ação de botão
    const navigate = useNavigate();

    const onSubmit = async (formData: IFormData) => {
        try {
            const { data } = await reqApi.get('');

            let userPass = false;

            for (let user in data) {
                if (data[user].email === formData.email && data[user].password === formData.password) userPass = true;
            }

            userPass ? navigate('/feed') : alert('Usuário inválido!');

        } catch (msgError) {
            alert(`Ocorreu algum erro, por favor tente novamente (Erro: ${msgError})`);

        }
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                    </Title>

                </Column>

                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login</SubtitleLogin>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name='email' control={control} placeholder='E-mail' messageError={errors?.email?.message} leftIcon={<MdEmail />} />
                            <Input name='password' control={control} placeholder='Senha...' messageError={errors?.password?.message} type='password' leftIcon={<MdPassword />} />

                            <Button title='Entrar' variant='secondary' type='submit' />

                        </form>

                        <Row>
                            <LostText>Esqueci minha senha</LostText>
                            <CreateText>Criar conta</CreateText>

                        </Row>

                    </Wrapper>

                </Column>

            </Container>

        </>

    );

};