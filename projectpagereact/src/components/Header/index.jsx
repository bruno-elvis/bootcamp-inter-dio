import { Button } from '../Button';
import * as Comps from './styles';
import logo from '../../assets/kawasaki.png';

export function Header() {
    return (
        <Comps.Wrapper>
            <Comps.Container>
                <Comps.Row>
                    <img src={logo} alt='Logo'></img>

                    <Comps.BuscarInputContainer>
                        <Comps.Input placeholder='Buscar...'/>

                    </Comps.BuscarInputContainer>

                    <Comps.Menu>
                        Live Code

                    </Comps.Menu>

                    <Comps.Menu>
                        Global

                    </Comps.Menu>

                </Comps.Row>

                <Comps.Row>
                    <Comps.MenuRight href='#'>Home</Comps.MenuRight>

                    <Button title="Entrar"></Button>
                    <Button title="Cadastrar"></Button>

                </Comps.Row>

            </Comps.Container>

        </Comps.Wrapper>

    );

};