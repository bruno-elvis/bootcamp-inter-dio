import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'
import { MdThumbUp } from 'react-icons/md';
import bg from '../../assets/bg.jpg';

export function Card() {
    return (
        <CardContainer>
            <ImageBackground src={bg}/>
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/50249992?v=4'/>

                    <div>
                        <h4>Bruno Silva</h4>
                        <p>Há 13 minutos</p>

                    </div>

                </UserInfo>

                <PostInfo>
                    <h4>Projeto para curso de ReactJS</h4>
                    <p>Projeto concluído atráves de curso Bootcamp cedido pela DIO e Inter... <strong>Saiba mais</strong></p>

                </PostInfo>

                <HasInfo>
                    <h4>HTML, CSS e JavaScript + React</h4>
                    <p><MdThumbUp /> 10</p>
                    
                </HasInfo>

            </Content>

        </CardContainer>

    );
};