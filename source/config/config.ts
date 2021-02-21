import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_POST = process.env.SERVER_POST || 3000;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_POST
};

const config = {
    server: SERVER
};

export default config;
