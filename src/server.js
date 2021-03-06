import express from 'express';
import graphQLHTTP from 'express-graphql';
import { schema, root } from './schema';

const app = express();

/*
* by default server run on port '5000'
* you can change it if you want
*/
app.set('port', (process.env.PORT || 5000));

/*
* you can disable graphiql IDE and pretty options
* by change value from 'true' to 'false'
*/
app.use('/graphql', graphQLHTTP({
  graphiql: process.env.NODE_ENV === 'staging' ? true : false,
  pretty: true,
  rootValue: root,
  schema,
}));

app.listen(app.get('port'), () => {
  // eslint-disable-next-line
  console.log(`GraphQL run on port ${app.get('port')}`);
});
