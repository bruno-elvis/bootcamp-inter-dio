import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BuscarInputContainer = styled.div`
    width: 175px;
    height: 30px;
    background-color: #2d2d37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;
    display: flex;
    align-items: center;
`;

const Menu = styled.a`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-size: 18px;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
`;

const MenuRight = styled.a`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
`;

const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #fff;
`;

const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #fff;
`;

export { BuscarInputContainer, Column, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper };