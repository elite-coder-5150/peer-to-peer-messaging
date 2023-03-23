import type {Request, Response} from 'express';
import {addNode} from "../server";

export const register = async (req: Request, res: Response) => {
    const {user, uri} = req.body;
    addNode(user, uri);
    res.json({msg: 'success'});
}
