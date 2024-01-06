const { MongoClient } = require("mongodb");

async function connect(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = 'mongodb+srv://Ayouba:ayouba1234@cluster0.t6y45a7.mongodb.net/';
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log('connected to database');
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

module.exports = connect;