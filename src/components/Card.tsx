import { Organization } from '.'
import { IOrganization } from '../types'

type Props = {
  organization: IOrganization
}

export const Card = ({ organization }: Props) => {
  return (
    <div className='bg-gray-100 border-solid border-2 border-gray-200 rounded-2xl p-6 flex flex-col gap-2 min-w-[400px] items-start'>
      <Organization organization={organization} />

      <h3 className='uppercase font-bold text-lg'>Members</h3>
      {/* map through the organization members here */}
    </div>
  )
}
