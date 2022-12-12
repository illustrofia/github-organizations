import cx from 'classnames'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { ArrowDown, Member, Organization } from '.'
import { getMembers } from '../api'
import { IOrganization } from '../types'

type Props = {
  organization: IOrganization
}

export const Card = ({ organization }: Props) => {
  const { data: members, isLoading } = useQuery(
    `members${organization.id}`,
    async () => getMembers(organization.login),
    {
      initialData: [],
    }
  )

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={cx({
        'relative bg-gray-100 transition-colors ease-out duration-200 border-solid border-2 border-gray-200 rounded-2xl p-6 flex flex-col gap-2 min-w-[400px] items-start hover:shadow-md':
          true,
        'border-2 border-blue-500 bg-[rgba(47,128,237,0.02)] shadow-md': isOpen,
      })}
    >
      <Organization organization={organization} />

      <div
        className={cx({
          'flex flex-col transition-all ease-out duration-200': true,
          'opacity-100 relative': isOpen,
          'opacity-0 absolute': !isOpen,
        })}
      >
        <h3 className='uppercase font-bold text-lg'>Members</h3>

        {members &&
          members.map(member => <Member member={member} key={member.id} />)}

        {!members?.length && !isLoading && (
          <div className='pt-1 pb-2'>
            <span className='text-base'>No members for this organization.</span>
          </div>
        )}
      </div>

      <span
        className={cx({
          'absolute bottom-3 left-[calc(50%-10px)] cursor-pointer transition-all ease-out duration-200':
            true,
          'rotate-180': isOpen,
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <ArrowDown />
      </span>
    </div>
  )
}
