import { Column, Container, Title, TitleHighlight } from './styles';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

export function Feed() {
    return (
        <>
            <Header auth={true}/>
            <Container>
                <Column flex={3}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </Column>

                <Column flex={1}>
                    <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                    <UserInfo name='Bruno Silva' percentual={55} image='https://avatars.githubusercontent.com/u/50249992?v=4' />
                    <UserInfo name='Bruno Elvis' percentual={25} image='https://avatars.githubusercontent.com/u/50249992?v=4' />
                    <UserInfo name='Bruna Rodrigues' percentual={95} image='https://avatars.githubusercontent.com/u/50249992?v=4' />
                    <UserInfo name='Bruno Pereira' percentual={50} image='https://avatars.githubusercontent.com/u/50249992?v=4' />
                    <UserInfo name='Bruna Lima' percentual={99} image='https://avatars.githubusercontent.com/u/50249992?v=4' />

                </Column>
        

            </Container>

        </>

    );

};