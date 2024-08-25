const express = require('express');
const router = express.Router();
const {getPeople,postPeople,modifyPeople,deletePeople}=require("../controllers/people")


// router.get('/', getPeople)
// router.post('/',postPeople)
// router.post('/postman',postPeople)
// router.put('/:id',modifyPeople )
// router.delete('/:id',deletePeople )

//alternate of above

router.route('/').get(getPeople).post(postPeople);
router.route('/postman').post(postPeople);
router.route('/:id').put(modifyPeople).delete(deletePeople);

module.exports = router;