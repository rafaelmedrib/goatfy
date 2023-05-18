import type { FindEmployeeById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Employee from 'src/components/Employee/Employee'

export const QUERY = gql`
  query FindEmployeeById($id: Int!) {
    employee: employee(id: $id) {
      id
      email
      hashedPassword
      salt
      resetToken
      resetTokenExpiresAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Employee not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ employee }: CellSuccessProps<FindEmployeeById>) => {
  return <Employee employee={employee} />
}
