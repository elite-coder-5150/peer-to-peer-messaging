import {lookupUser} from "../lookupUser";
type Info = {
    mockUser: string;
    mockUri: string;
    mockRequestId: number;
    mockResponse: {
        id: number;
        name: string;
    }
};

describe("lookupUser", () => {
    let info: Info = {
        mockUser: 'test',
        mockUri: 'http://localhost:3000',
        mockRequestId: 1234,
        mockResponse: {
            id: 1,
            name: 'test'
        }
    }

    beforeEach(() => {
        // @ts-ignore
        spyOn(window, 'fetch').and.returnValue(Promise.resolve({
            ok: true,
            json: () => Promise.resolve(info.mockResponse)
        }))
    })

    it('should call fetch with the correct uri', async () => {
        await lookupUser('test', 'http://localhost:3000', '1234');


        // @ts-ignore
        expect(window.fetch).toHaveBeenCalledWith('http://localhost:3000/users/test', {
            // @ts-ignore
            headers: {
                'X-Request-Id': info.mockRequestId
            }
        })

        it ('should throw and error on failure', async () => {
            spyOn(console, 'error');
            // @ts-ignore
            spyOn(window, 'fetch').and.returnValue(Promise.resolve({
                ok: false,
                json: () => Promise.resolve(info.mockResponse)
            }))

            try {
                await lookupUser('test', 'http://localhost:3000', '1234');
            } catch (error) {
                // @ts-ignore
                expect(error.message).toEqual('user not found');
            }

            expect(console.error).toHaveBeenCalledWith('Error', new Error('user not found'))
        })
    })
    it('should call fetch with the correct uri', async () => {
        const result = await lookupUser('test', 'http://localhost:3000', '1234');
        // @ts-ignore
        expect(result).toEqual(info.mockResponse)

    })
})

// q: will this test pass or fail?
