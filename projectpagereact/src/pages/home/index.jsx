import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

export function Home() {
    return (
        <>
            <Header />

            <Button title='Login' onClick={str => alert('opa')}/>
            <Button title='Teste' variant='secondary' onClick={alert}/>

        </>

    );

};