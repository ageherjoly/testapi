import { Request, Response } from 'express'
import { Form, Selector, Field, Section } from '../interfaces/formInterfaces'


export const getForm  = (req: Request, res: Response) => {
    // @TODO Implement route API
    // should return form list
    res.send([
      {
        id: 1,
        name: 'form1',
        actif: true
      },
      {
        id: 2,
        name: 'form2',
      },
    ])
}

export const getFormById  = (req: Request, res: Response) => {
    // @TODO Implement route API
    // Send all data from form id
    res.send('ok')
}

export const postForm  = (req: Request, res: Response) => {
    // @TODO Implement route API
    // update form
    res.send('postForm')
}

export const putForm  = (req: Request, res: Response) => {
    // @TODO Implement route API
    res.send('putForm')
}

export const postSection  = (req: Request, res: Response) => {
    // @TODO Implement route API
    res.send('postSection')
}

export const putSection  = (req: Request, res: Response) => {
    // @TODO Implement route API
    res.send('putSection')
}

export const postField  = (req: Request, res: Response) => {
    // @TODO Implement route API
    res.send('postField')
}

export const putField  = (req: Request, res: Response) => {
    // @TODO Implement route API
    res.send('putField')
}
