const db = require("../data/dbConfig.js");

module.exports = {
    find, 
    findById,
    add 
}

function find() {
    return db("schemes");
}

function findById(id) {
    return db("schemes")
        .where({ id })
        .then(scheme => {
            res.status(200).json(scheme)
        })
}

function add(scheme) {
    return db("schemes")
        .insert(scheme)
        .then(ids => findById(ids[0]))
}