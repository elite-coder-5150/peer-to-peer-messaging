import {getNodes} from "../server";

describe('addNode', () => {
    beforeEach(() => {
        spyOn(console, 'log');
    })

    afterEach(() => {
        getNodes().length = 0;
    })

    it ('should add a new node to the list of servers', () => {
        const node = { uri: 'http://localhost:3000', user: 'test-user' }
        expect(getNodes()).toEqual([node])
    })

    it ('should not add a node with the same user as an existing node', () => {
        const node1 = {uri: 'http://localhost:3000', user: 'test-user1'}
        const node2 = {uri: "http://localhost:3000", user: 'test-user2'}

        expect(getNodes()).toEqual([node1, node2])
    });


})
