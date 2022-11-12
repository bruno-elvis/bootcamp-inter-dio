import { Button } from '../Button';
import * as Comps from './styles';
import logo from '../../assets/kawasaki.png';

export function Header({ auth }) {
    return (
        <Comps.Wrapper>
            <Comps.Container>
                <Comps.Row>
                    <img src={logo} alt='Logo'></img>

                    {auth ? (
                        <>
                            <Comps.BuscarInputContainer>
                                <Comps.Input placeholder='Buscar...'/>

                            </Comps.BuscarInputContainer>

                            <Comps.Menu>Live Code</Comps.Menu>

                            <Comps.Menu>Global</Comps.Menu>
                        </>
                    ) : null}

                </Comps.Row>

                <Comps.Row>
                    {auth ? (
                        <Comps.UserPicture src='https://avatars.githubusercontent.com/u/50249992?v=4' />
                    ) : (
                        <>
                            <Comps.MenuRight href='#'>Home</Comps.MenuRight>

                            <Button title="Entrar"></Button>
                            <Button title="Cadastrar"></Button>
                        </>
                    )}

                </Comps.Row>

            </Comps.Container>

        </Comps.Wrapper>

    );

};