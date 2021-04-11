const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';
const dboper = require('./operations')

MongoClient.connect(url,(err, client) => {
  assert.equal(err,null);
  console.log('Connected correctly to server');

  const db = client.db(dbname);

  dboper.insertDocument(db,{name:"Vadonut", description: "Test"}, 'dishes',(result) =>{
    console.log('insert document:\n', result.ops);

    dboper.findDocument(db, 'dishes',(docs) =>{
      console.log('found documents:\n', docs);

      dboper.updateDocument(db, {name: 'vadonut'},{description: 'updated test'},'dishes',(result) =>{
        console.log('updated Document:\n', result.result);

            dboper.findDocument(db, 'dishes',(docs) =>{
              console.log('found documents:\n',docs);

              db.dropCollection('dishes',(reslut) =>{
                console.log('Dropped Collection: ',result);

                client.close();
              });
            });
      });
    });
  });
});
