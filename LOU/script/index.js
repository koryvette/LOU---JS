const express = require('express');
const app = express();
app.listen(3000, () => console.log ('listening at 3000'));
app.use(express.static('../LOU_JS'));

//cd source\repos\LOU_JS\script node index.js