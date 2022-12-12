import { IMember } from '../types'

type Props = {
  member: IMember
}

export const Member = ({ member }: Props) => {
  return (
    <div className='flex gap-4'>
      <span className='flex items-center w-[60px] px-[6px] pb-2'>
        <img className='rounded-full' src={member.avatar_url} />
      </span>

      <div className='flex flex-col gap-2 items-start'>
        <span className='font-bold text-lg'>{member.login}</span>
        <span className='text-base'>{member.id}</span>
      </div>
    </div>
  )
}
