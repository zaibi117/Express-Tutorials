let { people } = require('../data');
const getPeople = (req, res) => {
    res.status(200).json({ success: true, people });
}

const postPeople = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: "Please enter a name" })
    };
    res.status(201).json({ success: true, person: name })

}

const modifyPeople = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const searchPeople = people.find(people => people.id === Number(id))
    if (!searchPeople) {
        return res.status(404).json({ success: false, msg: `No person found with the ${id}` })
    }

    const newPeople = people.map(person => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })
    res.status(200).json({ success: true, data: newPeople })
}

const deletePeople = (req, res) => {
    const { id } = req.params;

    const searchPeople = people.find(person => person.id === Number(id));
    if (!searchPeople) {
        return res.status(404).json({ success: false, data: `No person found with id ${id}` });
    }
    const newPeople = people.filter(person => person.id !== Number(id))
    res.status(200).json({ success: true, data: newPeople });
}

module.exports={
    getPeople,
    postPeople,
    modifyPeople,
    deletePeople,
}