import express from 'express'

// importing our controllers from their respective controller file
import {
    getForm,
    getFormById,
    postForm,
    putForm,
    postSection,
    putSection,
    postField,
    putField,
} from './controllers/formControllers';

const app = express()

// API Endpoints
app.get('/form', getForm) // get form list {name, id}
app.get('/form/:id', getFormById) // get all data form
app.post('/form', postForm) // add new form info
app.put("/form", putForm) // update form info

app.post("/section", postSection) // add section
app.put("/section/:id", putSection) // update section

app.post('/field', postField) // add field
app.put('/field/:id', putField) // update field

// export our app
export default app
