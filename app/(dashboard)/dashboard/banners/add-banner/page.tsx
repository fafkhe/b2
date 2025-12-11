// import BannerForm from '@/components/dashboard/forms/BannerForm'
const BannerForm = dynamic(
  () => import('@/components/dashboard/forms/BannerForm'),
  { ssr: false } // This prevents server-side rendering
);

import BreadcrumbComponent from '@/components/others/Breadcrumb'
import React from 'react'
import dynamic from 'next/dynamic';

const AddBannerPage = () => {
  return (
    <div className='p-2 w-full'>
      <BreadcrumbComponent links={['/dashboard','/banners']} pageText='add banner'/>
      <BannerForm />
    </div>
  )
}

export default AddBannerPage