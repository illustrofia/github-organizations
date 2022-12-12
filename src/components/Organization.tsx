import { IOrganization } from '../types'

type Props = {
  organization: IOrganization
}

export const Organization = ({ organization }: Props) => {
  return (
    <div className='flex gap-6'>
      <span className='flex items-center w-[72px]'>
        <img className='rounded-full' src={organization.avatar_url} />
      </span>

      <div className='flex flex-col gap-2 items-start'>
        <span className='font-bold text-2xl leading-[20px]'>
          {organization.login}
        </span>
        <span className='text-base'>{organization.id}</span>
        <span className='text-base'>{organization.node_id}</span>
      </div>
    </div>
  )
}
