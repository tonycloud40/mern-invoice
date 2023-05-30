import dotenv from 'dotenv';
dotenv.config()
import chalk from 'chalk'
import morgan from 'morgan'
import express from 'express';


const app = express();

if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'))
}

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/api/v1/test", (req, res) => {
    res.json({Hi : "Welcome to the Invoice App"});
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`${chalk.green.bold("✓")} 👍 Server running in ${chalk.yellow.bold(process.env.NODE_ENV)}
    mode on port ${chalk.blue.bold(PORT)}`);
});