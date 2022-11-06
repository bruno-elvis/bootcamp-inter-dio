import Styled from 'styled-components';

const Container = Styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`;

const Row = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Column = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Wrapper = Styled.div`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BuscarInputContainer = Styled.div`
    width: 175px;
    height: 30px;
    background-color: #2d2d37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;
    display: flex;
    align-items: center;
`;

const Menu = Styled.a`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
`;

const MenuRight = Styled.a`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
`;

const UserPicture = Styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #fff;
`;

const Input = Styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #fff;
`;

export { BuscarInputContainer, Column, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper };