import { IMember } from '../types'

type Props = {
  member: IMember
}

export const Member = ({ member }: Props) => {
  return (
    <div className='flex gap-4 relative'>
      <span className='flex items-center w-[60px] px-[6px] pb-2'>
        {member.login && (
          <img className='rounded-full' src={member.avatar_url} />
        )}
      </span>

      <div className='flex flex-col gap-2 items-start'>
        {member.login && (
          <span className='font-bold text-lg'>{member.login}</span>
        )}
        {member.id && <span className='text-base'>{member.id}</span>}
      </div>
    </div>
  )
}
