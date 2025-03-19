"use client"
import { ShowMoreProps, updateSearchParams } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react'
import CustomButton from './CustomButton'

const ShowMore = ({pagenumber,isNext}:ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pagenumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    
    router.push(newPathname,{scroll:false});
  }

  return (
    <div className='w-full mt-10 gap-5 flex-center'>
        {!isNext && (
            <CustomButton
            title='Show More'
            btnType='button'
            containerStyles='bg-primary-blue rounded-full text-white'
            handleClick={handleNavigation}
            />
        )}
    </div>
  )
}

export default ShowMore