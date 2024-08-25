const express = require('express');
const app = express();
let { people } = require('./data');

// static assests
app.use(express.static('./method-public'))

//parse form data
app.use(express.urlencoded({ extended: false }))
//parse json
app.use(express.json())

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send("Please Provide Credentials");
})
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, people });
})

app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: "Please enter a name" })
    };
    res.status(201).json({ success: true, person: name })

})

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: "Please Provide a name" })
    }
    res.status(201).json({ success: true, data: [...people, name] })
})

//modify
app.put('/api/people/:id', (req, res) => {
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
})
app.delete('/api/people/:id', (req, res)=> {
    const {id} = req.params;

    const searchPeople=people.find(person=> person.id ===Number(id));
    if(!searchPeople)
    {
        return res.status(404).json({success:false,data:`No person found with id ${id}`});
    }
    const newPeople=people.filter(person=>person.id!==Number(id))
    res.status(200).json({success:true,data:newPeople});
})
app.listen(5000, () => {
    console.log("Listening on port 5000...")
})