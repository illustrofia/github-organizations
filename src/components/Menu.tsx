import { useQuery } from 'react-query'
import { Card } from '.'
import { getOrganizations } from '../api'

export const Menu = () => {
  const {
    data: organizations,
    isLoading,
    error,
  } = useQuery('organizations', async () => getOrganizations(), {
    initialData: [],
  })

  if (isLoading) {
    return <>Loading organizations...</>
  }

  if (error) {
    const errorMessage = error instanceof Error ? ': ' + error.message : ''
    return <>Oops, something went wrong {errorMessage}</>
  }

  const cards = organizations?.map(org => (
    <Card organization={org} key={org.id} />
  ))

  const leftColCards = cards?.filter((_, index) => index % 2 == 0)
  const rightColCards = cards?.filter((_, index) => index % 2 != 0)

  return (
    <div className='bg-gray-50 py-14 px-20 flex flex-col gap-8 rounded-3xl font-body text-black max-w-5xl'>
      <h1 className='font-bold text-3xl'>
        GitHub organizations and their members
      </h1>
      <div className='flex gap-4'>
        <div className='flex flex-col gap-4'>{leftColCards}</div>
        <div className='flex flex-col gap-4'>{rightColCards}</div>
      </div>
    </div>
  )
}
