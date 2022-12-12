import { useQuery } from 'react-query'
import './App.css'
import { Providers } from './components'
import { getOrganizations } from './lib'

export const App = () => {
  return (
    <Providers>
      <Example />
    </Providers>
  )
}

const Example = () => {
  const {
    isLoading,
    error,
    data: organizations,
  } = useQuery('organizations', getOrganizations, { initialData: [] })

  if (isLoading) {
    return <>{'Loading...'}</>
  }

  if (error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <>{'An error has occurred: ' + (error as any).message}</>
  }

  return <div>{organizations && JSON.stringify(organizations)}</div>
}
