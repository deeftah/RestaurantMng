import express from 'express';
import dbConfig from './config/db';
import middlewares from './config/middlewares';
import { LoginRoute, SignupRoute } from './modules';

const app = express();

/**
 * Connect Database
 */
dbConfig();

/**
 * Use Middlewares
*/
middlewares(app);

/**
 * Routes
 */
app.use('./api', [LoginRoute, SignupRoute]);

/**
 * Start server
*/
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App list to port: ${PORT}`);
  }
});
