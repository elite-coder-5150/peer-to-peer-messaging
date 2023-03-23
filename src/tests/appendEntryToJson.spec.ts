import fs from 'fs';
import { appendEntryToJson } from '../appendEntryToJson';
import {addNode, getNodes, getNodesByUser} from "../server";
import {Node} from "../server";

describe('appendEntryToJson', () => {
    const path = './src/tests/test.json';
    const entry = {name: 'test', age: 1};
    
    beforeEach(() => {
        fs.writeFileSync(path, '[]');
    })
    
    afterEach(() => {
        fs.unlinkSync(path);
    });
    
    it('should append entry to json file', () => {
        const fileContents = fs.readFileSync(path, 'utf8');
        const data = JSON.parse(fileContents);
        
        expect(data).toContain(entry);
    })

    it('should append an entry to an non-empty json file', () => {
        fs.writeFileSync(path, JSON.stringify([entry]));

        const newEntry = {name: 'test2', age: 2};
        appendEntryToJson(path, newEntry);

        const fileContents = fs.readFileSync(path, 'utf8');
        const data = JSON.parse(fileContents);

        expect(data).toContain(entry);
        expect(data).toContain(newEntry);
    })
})

// q: will this unit pass or fail?
// a: it will fail
// q: why?
// a: because the test is not testing the function
