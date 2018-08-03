const neo4j = require('neo4j-driver').v1;

const driver = neo4j.driver("bolt://10.172.211.97:7687", neo4j.auth.basic("neo4j", "Lando"));
const session = driver.session();

const personName = 'BA';
const resultPromise = session.run(
  'Match (s:Service {name: $name}) RETURN s',
  {name: personName}
);

resultPromise.then(result => {
  session.close();

  const singleRecord = result.records[0];
  const node = singleRecord.get(0);

  console.log(node.properties);

  // on application exit:
  driver.close();
});