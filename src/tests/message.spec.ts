import {message} from "../routes";

describe('message', () => {
    it ('should log the correct message and return a success json response', async () => {
        const req = {
            body: {
                from: 'user1',
                message: 'hello'
            }
        };

        const res = {
            json: jasmine.createSpy('json')
        };

        await message(req, res);

        expect(console.log).toHaveBeenCalledWith('user1: hello');
        expect(res.json).toHaveBeenCalledWith({msg: 'success'});
    })
})
