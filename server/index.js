import express from 'express';
import bodyparser from 'body-parser';
import moongoose from 'moongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://javascriptmastery:javascriptmastery123@cluster0.prvf2.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
moongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log('Server running on port: ${PORT}')
