import {getNodes, getNodesByUser} from "../server";

describe('addNode', () => {
    const servers = [{ uri: 'http://localhost:300', user: 'user1'}]
   it ('should return a new array that is a copy of the servers array', () => {
       const nodes = getNodes();

       expect(nodes).toEqual(servers)
       expect(nodes).not.toBe(servers)
   })
})

// q: will this pass or fail?
// a: it will pass
