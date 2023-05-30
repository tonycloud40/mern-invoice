import dotenv from 'dotenv';
dotenv.config()
import chalk from 'chalk'
import morgan from 'morgan'
import express from 'express';

import {morganMiddleware, systemLogs} from "./utils/Logger.js"


const app = express();

if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'))
}

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(morganMiddleware)

app.get("/api/v1/test", (req, res) => {
    res.json({Hi : "Welcome to the Invoice App"});
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    const message = `${chalk.green.bold("✓")} 👍 \
    Server running in ${chalk.yellow.bold(process.env.NODE_ENV)} \
    mode on port ${chalk.blue.bold(PORT)}`;
    
    //Display in the console
    console.log(message);

    // Add to the Log
    systemLogs.info(message);

});