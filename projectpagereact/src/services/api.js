import axios from 'axios';

export const reqApi = axios.create({
        baseURL: 'https://sequelize-crud-postgresql.herokuapp.com/users/',

});