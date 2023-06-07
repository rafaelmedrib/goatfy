import EmployeeCell from 'src/components/Employee/EmployeeCell'

type EmployeePageProps = {
  id: number
}

const EmployeePage = ({ id }: EmployeePageProps) => {
  return <EmployeeCell id={id} />
}

export default EmployeePage
