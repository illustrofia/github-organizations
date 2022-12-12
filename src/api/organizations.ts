import { API_BASEPATH } from '.'
import { IOrganization } from '../types'

export const getOrganizations = async () => {
  const response = await fetch(
    `${API_BASEPATH}/organizations?per_page=6&since=4242`
  )
  const data = await response.json()

  return data as IOrganization[]
}
