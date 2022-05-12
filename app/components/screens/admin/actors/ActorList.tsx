import { FC } from 'react'

import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/AdminTable/AdminTable'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { useActors } from './useActors'

const ActorList: FC = () => {
  const { data, isLoading, deleteAsync, searchTerm, handleSearch } = useActors()

  return (
    <Meta title="Actors">
      <AdminNavigation />
      <Heading title="Actors" />
      <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
      <AdminTable
        tableItems={data || []}
        headerItems={['Name', 'Count movies']}
        isLoading={isLoading}
        removeHandler={deleteAsync}
      />
    </Meta>
  )
}

export default ActorList
