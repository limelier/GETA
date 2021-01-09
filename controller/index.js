const HttpCodes = require('http-status-codes')

let allFruit = []

function getFruit(req, res) {
    console.log('get fruit');
    res
        .status(HttpCodes.StatusCodes.OK)
        .json({
            ok: true,
            allFruit,
        });
}

function putFruit(req, res) {
}

function postFruit(req, res) {
    const {fruit} = req.body;
    allFruit.push(fruit);
    res
        .status(HttpCodes.StatusCodes.CREATED)
        .json({
            ok: true,
        });
}

function deleteFruit(req, res) {
}

module.exports = {getFruit, putFruit, postFruit, deleteFruit}