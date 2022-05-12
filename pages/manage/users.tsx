import React from 'react'

import UserList from '@/screens/admin/users/UserList'

import { NextPageAuth } from '@/shared/types/auth.types'

const UsersListPage: NextPageAuth = () => {
  return <UserList />
}

UsersListPage.isOnlyAdmin = true

export default UsersListPage
