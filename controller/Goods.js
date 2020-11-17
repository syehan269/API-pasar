const db = require("../model/index");
const Good = db.goods;
const Op = db.Sequelize.Op;

exports.all = (req, res) => {
    Good.findAll({
        attributes: ['id','name','description']
    }).then(data => {
        res.send({
            message: "get data success",
            data: data
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "error has occured",
        });
    });
};

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "content is empty"
        });
        return;
    }

    const good = {
        name: req.body.name,
        description: req.body.description
    };

    Good.create(good)
        .then(data => {
            res.send({
                message: "input data success",
                data: data
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "error has occured"
            })
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content is empty"
        });
        return;
    }

    const good = {
        name: req.body.name,
        description: req.body.description
    };

    Good.update(good, {
        where: {
            id: req.params.id
        }
    }).then(data => {
        if (data === 1) {
            res.send({
              message: "data updated",
            });
        }else{
            res.status(400).send({
              message: "data failed to updated",
            });
        }
    })
    .catch( err => {
        res.status(500).send({
            message: err.message || "error has occured"
        });
    });
};

exports.find = (req, res) => {
    Good.findByPk(req.params.id)
        .then(data => {
            res.send({
                message: "data finded",
                data: data
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "error has occured"
            });
        });
};

exports.delete = (req, res) => {
    Good.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.send({
            message: "delete success"
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "error has occured"
        });
    });
};