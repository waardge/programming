import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template.js'
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/products.routes.js';
import categoryRoutes from './routes/categories.routes.js';

const app = express()

app.get('/', (req, res) => {
res.status(200).send(Template()) 
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

export default app
