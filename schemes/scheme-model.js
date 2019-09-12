const db = require("../data/dbConfig.js");

module.exports = {
    find, 
    findById,
    add,
    update, 
    remove, 
    findSteps
}

function find() {
    return db("schemes");
}

function findById(id) {
    return db("schemes")
        .where("id", id)
        .first()
}

function add(scheme) {
    return db("schemes")
        .insert(scheme)
        .then(ids => findById(ids[0]))
}

function update(changes, id) {
    console.log(changes)
    return db("schemes")
        .where("id", id)
        .first()
        .update(changes)
        .then(count => {
           return (count > 0 ? findById(id) : null)
        })
}

function remove(id) {
    return db("schemes")
        .where({id})
        .del()
}

function findSteps(id) {
    
}
