const express = require('express')
const app = express();
const port = 8000;
const cors = require('cors')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

require('./config/mongoose.config')
require('./routes/pm.routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));