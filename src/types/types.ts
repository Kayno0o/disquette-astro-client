export interface Disquette {
  author: Person
  isOc: boolean
  isPublic: boolean
  name: string
  slug: string
  tags: string[]
  uuid: string
  content: string
}

export type RoleType = 'ROLE_USER' | 'ROLE_ADMIN' | 'ROLE_SUPER_ADMIN'

export interface Person {
  id: string
  username: string
  roles: Array<RoleType>
}
