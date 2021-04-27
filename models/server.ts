import express, { Application } from 'express';
import clientesRoutes from '../routes/clientes';
import cors from 'cors';
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        clientes: '/api/clientes'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();

        this.middelwares();

        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();            
            console.log('DB online');
        } catch (error) {
            throw new Error( error )
        }
    }

    middelwares() {
        // CORS
        this.app.use( cors() );

        // READ AND PARSE BODY
        this.app.use( express.json() );

        // CARPETA PUBLIC
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.apiPaths.clientes, clientesRoutes)
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server Run On Port ' + this.port);
        })
    }

}


export default Server;