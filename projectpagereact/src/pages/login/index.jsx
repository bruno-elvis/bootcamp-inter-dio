import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Column, Container, CreateText, LostText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { MdEmail, MdPassword } from 'react-icons/md';

export function Login() {
    const navigate = useNavigate();

    function handleClickSignIn () {
        navigate('/feed');

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

                        <form action="">
                            <Input placeholder='E-mail' leftIcon={ <MdEmail /> }/>
                            <Input placeholder='Senha...' type='password' leftIcon={ <MdPassword /> }/>

                            <Button title='Entrar' variant='secondary' onClick={handleClickSignIn}/>

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