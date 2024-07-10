import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import teacherRouter from './routes/teachers'


const app: Application = express();
// const PORT: number = 3001;

// Swagger configuration
const options = {
  definition: {
      openapi: '3.0.0', 
      info: {
          title: 'Test Swagger API',
          version: '1.0.0',
          description: 'Test API',
      },
      // servers: [
      //     {
      //         url: `http://localhost:${PORT}`,
      //         description: 'Dev server',
      //     },
      // ],
  },
  apis: ['**/*.ts'], // Path to the API docs
};


const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(bodyParser.json());

app.use('/api', teacherRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});


export default app;