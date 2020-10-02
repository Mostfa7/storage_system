const dotenv = require ('dotenv');
const app = require ('./app');
// const app = express ();
const mysql = require ('mysql');
dotenv.config ({path: './config.env'});

const PORT = 3000 || process.env.PORT;
app.listen (PORT, () => {
  console.log (`App running on port ${PORT}`);
});
