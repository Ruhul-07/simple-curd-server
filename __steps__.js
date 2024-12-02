/**
 * -------------------------------
 * MongoDB Connection
 * -------------------------------
 * 1. create account
 * 2. create a user with password
 * 3. whitelist IP address
 * 4. database > connect > driver > node > View full code
 * 5. change the password uri 
 * -------------------------------
 * 1. create --- POSt
 * 2. app.post('/users' async (req, res) => {})
 * 3. make the function async to use await inside it
 * 4. make sure you use the express.json() midleware
 * 5. access data form the body: const user = req.body
 * 6. const result = await userCollection.insertOne(user);
 * 7. res.send(result)
 * --------------------------------
 * 
 * client site
 * --------------------------------
 * 1. create fetch('')
 * 2. add second parameter as an object
 * 3. provide method: 'POST'
 * 4. add headers: {'content-type': 'applicationb/json'}
 * 5. add body: JSON.Stingify(user)
 * 
 * ------------------------------------
 * 
 * READ MANY
 * -----------------------------------
 * 1. create a cursor = userCollection.find()
 * 2. const result = await cursor.toArray()
 * 
 * --------------------------------------
 * 
 * 
 * DELETE
 * ---------------------------------
 * 1. const app.delete('/users/:id', async(req, res) => {})
 * 2. specify unique ObjectId to delete the right user
 * 3. const query = {_id: new ObjectId(id)}
 * 4. const result = await userCollection.deleteOne(query)
 * 
 * --------------------------------------------
 * 
 * 
 * CLIENT
 * ---------------------------------------------
 * 1. create dynamic url with id
 * 2. mention the DELETE method
 */