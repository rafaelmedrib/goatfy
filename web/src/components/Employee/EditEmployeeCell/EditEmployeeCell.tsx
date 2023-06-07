import type { EditEmployeeById, UpdateEmployeeInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmployeeForm from 'src/components/Employee/EmployeeForm'

export const QUERY = gql`
  query EditEmployeeById($id: Int!) {
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
const UPDATE_EMPLOYEE_MUTATION = gql`
  mutation UpdateEmployeeMutation($id: Int!, $input: UpdateEmployeeInput!) {
    updateEmployee(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ employee }: CellSuccessProps<EditEmployeeById>) => {
  const [updateEmployee, { loading, error }] = useMutation(
    UPDATE_EMPLOYEE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Employee updated')
        navigate(routes.employees())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateEmployeeInput,
    id: EditEmployeeById['employee']['id']
  ) => {
    updateEmployee({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Employee {employee?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EmployeeForm
          employee={employee}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
