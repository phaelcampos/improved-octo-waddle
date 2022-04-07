import { MongoClient } from 'mongodb';
import CONFIG from '@/config';

export async function connection() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri = CONFIG.APP.HOST;

  const client = new MongoClient(uri);

  // Connect to the MongoDB cluster
  await client.connect();
  // Make the appropriate DB calls
  return client;
}

// async function listDatabases(client: any) {
//   const databasesList = await client.db().admin().listDatabases();

//   console.log('Databases:');
//   databasesList.databases.forEach((db: any) => console.log(` - ${db.name}`));
//   console.log('novos');
// }
