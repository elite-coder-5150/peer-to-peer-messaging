import {Request, Response} from 'express';

import {lookup} from "../routes";
import {appendEntryToJson} from "../appendEntryToJson";
import {getNodesByUser} from "../server";
import {lookupUser} from "../lookupUser";

describe('lookup', () => {
    let seedIds = new Set();

    it ('should return the server for a given user', async () => {
        const req = jasmine.createSpyObj<Request>('req', ['body', 'get']);
        const res = jasmine.createSpyObj<Response>('res', ['json', 'status', 'send']);

        req.body = { user: 'test-ust' };

        (appendEntryToJson as any) = jasmine.createSpy('appendEntryToJson');
        (getNodesByUser as any) = jasmine.createSpy('getNodesByUser');

        seedIds.clear()

        expect(appendEntryToJson).toHaveBeenCalled();
        expect(getNodesByUser).toHaveBeenCalledWith('test-ust');
        expect(lookupUser).toHaveBeenCalledWith('test-user', 'http://localhost', jasmine.any(String));

        expect(res.json).toHaveBeenCalledWith({user: 'testuser', url: 'http://localhost'})
    })
})
