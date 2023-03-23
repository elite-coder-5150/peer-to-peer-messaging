import fetch from 'cross-fetch';
import {Node} from "./server";

export const lookupUser = async (user: string, uri: string, requestId: string) => {
    return fetch(`${uri}/users/${user}`, {
        headers: {
            'X-Request-Id': requestId
        }
    }).then((response) => {
        if (response.ok) {
            return response.json() as Promise<Node>;
        }

        throw new Error('user not found');
    })
};
