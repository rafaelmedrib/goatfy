import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmployeeForm from 'src/components/Employee/EmployeeForm'

import type { CreateEmployeeInput } from 'types/graphql'

const CREATE_EMPLOYEE_MUTATION = gql`
  mutation CreateEmployeeMutation($input: CreateEmployeeInput!) {
    createEmployee(input: $input) {
      id
    }
  }
`

const NewEmployee = () => {
  const [createEmployee, { loading, error }] = useMutation(
    CREATE_EMPLOYEE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Employee created')
        navigate(routes.employees())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateEmployeeInput) => {
    createEmployee({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Employee</h2>
      </header>
      <div className="rw-segment-main">
        <EmployeeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewEmployee
