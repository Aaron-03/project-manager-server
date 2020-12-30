import express, { Application } from "express";

export default class App {

    private app: Application;

    constructor(private port?: number|string) {
        this.app = express();
        this.middlewares();
        this.settings();
    }

    settings(): void {
        this.app.set('port', this.port || process.env.PORT || 4000);
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    listen() {
        this.app.listen(this.app.get('port'));
        console.log(`Escuchando en el puerto: ${this.app.get('port')}`);
    }
}