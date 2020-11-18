const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

//import model
const db = require("../model/index");

//import controller
const good = require("../controller/Goods");

const router = express.Router();
const app = express();

//delete all table & create new one
db.sequelize.sync({ force: true }).then(() => {
  console.log("all table recreated");
});

let corsOption = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: true
    }
));

/* GET home page. */
router.get('/', good.all);

router.get('/good/:id', good.find);

router.post('/good', good.create);

router.put('/good/:id', good.update);

router.delete('/good/:id', good.delete);

// TODO : buat new table "kategori"
// TODO : buat api join good & kategori

module.exports = router;
