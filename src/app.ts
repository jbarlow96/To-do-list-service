import { MongoDriverFactory } from "./MongoConnectorFactory";
import { expressDriver } from "./drivers/expressDriver";

MongoDriverFactory.build()
  .then(async (datastore) => {
    new expressDriver(datastore);
  })
  .catch(e => {
    throw e;
  });

 

