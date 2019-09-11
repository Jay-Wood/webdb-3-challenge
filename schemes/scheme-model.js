const db = require("../data/dbConfig.js");

module.exports = {
    find, 
    findById,
    add,
    update, 
    remove
}

function find() {
    return db("schemes");
}

function findById(id) {
    return db("schemes")
        .where("id", id).first()
     
}

function add(scheme) {
    return db("schemes")
        .insert(scheme)
        .then(ids => findById(ids[0]))
}

function update(changes, id) {
    return db("schemes")
        .where("id", id)
        .first()
        .update(changes)
}

function remove(id) {
    return db("schemes")
        .where({id})
        .del()

}