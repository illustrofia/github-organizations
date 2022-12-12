import { API_BASEPATH } from '.'
import { IMember } from '../types'

export const getMembers = async (organization: string) => {
  const response = await fetch(
    `${API_BASEPATH}/orgs/${organization}/public_members`
  )
  const data = await response.json()

  console.log({ data })

  return data as IMember[] | []
}
