import type { Employee } from '@prisma/client'

import {
  employees,
  employee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from './employees'
import type { StandardScenario } from './employees.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('employees', () => {
  scenario('returns all employees', async (scenario: StandardScenario) => {
    const result = await employees()

    expect(result.length).toEqual(Object.keys(scenario.employee).length)
  })

  scenario('returns a single employee', async (scenario: StandardScenario) => {
    const result = await employee({ id: scenario.employee.one.id })

    expect(result).toEqual(scenario.employee.one)
  })

  scenario('creates a employee', async () => {
    const result = await createEmployee({
      input: {
        email: 'String4039035',
        hashedPassword: 'String',
        salt: 'String',
      },
    })

    expect(result.email).toEqual('String4039035')
    expect(result.hashedPassword).toEqual('String')
    expect(result.salt).toEqual('String')
  })

  scenario('updates a employee', async (scenario: StandardScenario) => {
    const original = (await employee({
      id: scenario.employee.one.id,
    })) as Employee
    const result = await updateEmployee({
      id: original.id,
      input: { email: 'String65684432' },
    })

    expect(result.email).toEqual('String65684432')
  })

  scenario('deletes a employee', async (scenario: StandardScenario) => {
    const original = (await deleteEmployee({
      id: scenario.employee.one.id,
    })) as Employee
    const result = await employee({ id: original.id })

    expect(result).toEqual(null)
  })
})
