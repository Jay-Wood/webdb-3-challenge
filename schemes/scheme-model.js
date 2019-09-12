const db = require("../data/dbConfig.js");

module.exports = {
    find, 
    findById,
    add,
    update, 
    remove, 
    findSteps, 
    addStep
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
    return db("schemes")
        .join("steps", "schemes.id", "steps.scheme_id" )
        .where({ scheme_id: id })
        .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
        .then(steps => {
            return steps
        })
        .catch( () => console.log("Did not work"))
}

function addStep(step, scheme_id) {
    return db("steps")
        .insert(step)
        .where("scheme_id", scheme_id)
        .then(ids => findById(ids[0]))
}