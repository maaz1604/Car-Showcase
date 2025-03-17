"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { Carprops } from '@/types'
import CustomButton from './CustomButton'
import { calculateCarRent } from '@/utils'

interface CarCardProps {
    car:Carprops
}

const CarCard = ({car}:CarCardProps) => {
  const {city_mpg,year,make,model,transmission,drive} = car;
  const carrent = calculateCarRent(city_mpg,year);
  return (
    <div className='car-card group'>
        <div className='car-card__content'>
            <h2 className='car-card__content-title'>
                {make} {model}
            </h2>
        </div>
        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>
                $
            </span>
                {carrent}
            <span className='self-end text-[14px] font-semibold'>
                /day
            </span>
        </p>
    </div>
  )
}

export default CarCard 
