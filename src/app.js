import express from 'express'

import produtsRoutes from './routes/prtoduts.routes.js'
const app = express()

app.use(produtsRoutes);

export default app