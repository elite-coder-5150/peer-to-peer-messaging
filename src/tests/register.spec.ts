import { Request, Response } from 'express';
import {register} from "../routes";
import {addNode} from "../server";
import exp from "constants";

describe('register', () => {
    it ('should add a new node to the database an drespond with a success message', async () => {
        const req = jasmine.createSpyObj<Request>('req', ['body']);
        const res = jasmine.createSpyObj<Response>('res', ['json']);

        req.body = { user: 'testuser', uri: 'http://localhost:3000' };

        const addNodeSpy = jasmine.createSpy('addNode');
        (addNode as any) = addNodeSpy;

        await register(req, res);

        expect(addNodeSpy).toHaveBeenCalledWith('testuser', 'http://localhost:3000');
        expect(res.json).toHaveBeenCalledWith({msg: 'success'});
    })
})
