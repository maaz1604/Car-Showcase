"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { Carprops } from '@/types'
import CustomButton from './CustomButton'
import { calculateCarRent, generateCarImageUrl } from '@/utils'
import CarDetails from './CarDetails'

interface CarCardProps {
    car: Carprops
}

const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;
    const carrent = calculateCarRent(city_mpg, year);

    const [isOpen, setIsOpen] = useState(false);
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
            <div className='w-full h-40 my-3 relative object-contain'>
                <Image src={generateCarImageUrl(car)} alt='Car Model' fill priority className='object-contain' />
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-gray-600'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="/steering-wheel.svg" alt='Steering Wheel' width={20} height={20} />
                        <p className='text-[14px]'>
                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="/tire.svg" alt='Tire' width={20} height={20} />
                        <p className='text-[14px]'>
                            {drive.toUpperCase()}
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="/gas.svg" alt='Gas' width={20} height={20} />
                        <p className='text-[14px]'>
                            {city_mpg} MPG
                        </p>
                    </div>
                </div>
                <div className='car-card__btn-container'>
                    <CustomButton
                        title='View More'
                        containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                        textStyle='text-white text-[14px] leading-[17px] font-bold'
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    )
}

export default CarCard 
