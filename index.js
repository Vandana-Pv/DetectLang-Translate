const express = require("express");
const app = express();
let apiRouter = require('./routes/index')

app.use(express.json());
app.use(express.urlencoded());

app.use('/api',apiRouter);
app.listen(process.env.PORT || 4000, function () {
    console.log("Express app started on port 4000");
});
