import type { Prisma, Employee } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EmployeeCreateArgs>({
  employee: {
    one: {
      data: { email: 'String100320', hashedPassword: 'String', salt: 'String' },
    },
    two: {
      data: {
        email: 'String1187139',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Employee, 'employee'>
