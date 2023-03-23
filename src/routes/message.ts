import type {Request, Response} from 'express';

export const message = async (req: { body: { from: string; message: string } }, res: { json: jasmine.Spy<jasmine.Func> }) => {
    console.log(`${req.body.from}: ${req.body.message}`);
    res.json({msg: 'success'});
};
