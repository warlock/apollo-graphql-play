DB CONFIG

```js
module.exports = {
  db: mongodb://user:pass@serv:45512/gql_a1
}
```

Example queries:

```graphql
mutation InsertUser {
  createUser (input: {
    name: "Name"
    surname: "Surname"
    company: "Company"
    mail: "mail@mail.com"
  }) {
    id
  }
}

query getUser {
  user {
    id
    name
  }
}

query getUsers {
  users {
    name
  }
}
```