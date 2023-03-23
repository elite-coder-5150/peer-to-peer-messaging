import {getNodesByUser} from "../server";

describe('getNodesByUser', () => {
    const servers = [{uri: 'http://localhost', user: 'user1'}, {
        uri: 'http://localhost',
        user: 'user2'
    }, {uri: 'http://localhost', user: 'user1'}, {uri: 'http://localhost', user: 'user3'},];
    beforeEach(() => {
        spyOn(console, 'error');
    })

    it('should return an empty array if no servers match the user', () => {
        expect(getNodesByUser('user4')).toEqual([]);

    })

    it('should return an array of servers that match the user', () => {
        const expectedServers = [{uri: 'http://localhost', user: 'user1'}, {uri: 'http://localhost', user: 'user1'},];
        expect(getNodesByUser('user1')).toEqual(expectedServers);
    })

    it ('it should log an error message if the user argument is not a string', () => {
        getNodesByUser('user' as any);
        expect(console.error).toHaveBeenCalledWith('Error', new Error('user must be a string'))
    })

})
