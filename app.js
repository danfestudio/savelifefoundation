const express = require('express');
const app = express();
const port = 8001;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/static', './static');

app.use('/', require('./routes/_routes').app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

