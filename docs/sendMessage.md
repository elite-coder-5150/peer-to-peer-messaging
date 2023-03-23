## Documentation for the sendMessage function.

### Description
1. import the fetch library from cross fetch library.
2. The function returns a promise which is an asynchronous 
   function. It simple waits for the HTTP post request to 
   the uri/message endpoint to be completed.
3. Then the function uses the fetch library to send a post 
   request to the uri/message endpoint.
4. pass in an object which has the from and message properties
   this will be the request body
5. the function set the content-type to application/json

#### Parameters
1. **url** - the url to send the message to.
2. **message** - the message to send.
3. **uri** - the uri to send the message to.
