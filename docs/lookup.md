## The lookup component

The lookup function takes in to parameters, the request and the response objects.
The method first checks if the request is is in the seeds id set. if it is, it retuns
a 404 response. This is to prevent a user from sending the same request multiple timesm
which would result in multiple lookups for the same user.

if the request id is not in the seed_id set, it adds the request id to the set.

The lookup function calls the getNodesByUser function to get the server that is responsible
for looking up the user. if the function returns null, that means that the user is not found 
in the cache. the function then loops in the network and called the lookupUser function on each 
server to find the user. if the user is found, it returns the user information. if the user is 
not found it returns a 404 response.

if the user is found in the cache, the function returns the user information to the user.


## parameters
1. req - the request object
2. res - the response object
