import EditEmployeeCell from 'src/components/Employee/EditEmployeeCell'

type EmployeePageProps = {
  id: number
}

const EditEmployeePage = ({ id }: EmployeePageProps) => {
  return <EditEmployeeCell id={id} />
}

export default EditEmployeePage
