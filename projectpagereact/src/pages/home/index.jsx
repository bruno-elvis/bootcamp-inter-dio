import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Container, TextContent, Title, TitleHighlight } from './styles';
import banner from '../../assets/kawasaki__.png';
import { Button } from '../../components/Button';

export function Home() {
    const navigate = useNavigate();

    function handleClickSignIn () {
        navigate('/login');

    };

    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>
                            Implemente

                            <br />

                        </TitleHighlight>

                        Seu futuro agora!

                    </Title>

                    <TextContent>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                    </TextContent>
                    <Button title='Começar agora' variant='secondary' onClick={handleClickSignIn}/>
                </div>

                <div>
                    <img src={banner} alt="Imagem principal" />
                </div>

            </Container>

        </>

    );

};