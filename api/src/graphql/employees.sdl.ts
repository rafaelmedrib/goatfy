export const schema = gql`
  type Employee {
    id: Int!
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  type Query {
    employees: [Employee!]! @requireAuth
    employee(id: Int!): Employee @requireAuth
  }

  input CreateEmployeeInput {
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  input UpdateEmployeeInput {
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  type Mutation {
    createEmployee(input: CreateEmployeeInput!): Employee! @skipAuth
    updateEmployee(id: Int!, input: UpdateEmployeeInput!): Employee!
      @requireAuth
    deleteEmployee(id: Int!): Employee! @requireAuth
  }
`
