"use client"
import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { Carprops } from '@/types';
import React from 'react';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: Carprops;
}

const CarDetails = ({ car, isOpen, closeModal }: CarDetailsProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className={"relative z-10"} onClose={closeModal}>
                    <TransitionChild
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='inset-0 fixed bg-black bg-opacity-25' />
                    </TransitionChild>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex items-center min-h-full justify-center p-4 text-center'>
                            <TransitionChild
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <DialogPanel className={"w-full relative max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5 p-6"}>
                                    <button
                                        type='button'
                                        className='top-2 absolute z-10 right-2 p-2 w-fit bg-primary-blue-100 rounded-full'
                                        onClick={closeModal}
                                    >
                                        <Image
                                            src="/close.svg"
                                            alt='Close'
                                            width={20}
                                            height={20}
                                            className='object-contain'
                                        />
                                    </button>
                                    <div className='flex-1 flex flex-col gap-3'>
                                        <div className='w-full relative h-40 bg-pattern bg-cover bg-center rounded-lg'>
                                            <Image src="/hero.png" alt='Car Model' fill priority className='object-contain' />
                                        </div>
                                        <div className='flex gap-3'>
                                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                                <Image src="/hero.png" alt='Car Model' fill priority className='object-contain' />
                                            </div>
                                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                                <Image src="/hero.png" alt='Car Model' fill priority className='object-contain' />
                                            </div>
                                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                                <Image src="/hero.png" alt='Car Model' fill priority className='object-contain' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col flex-1 gap-2'>
                                        <h2 className=' font-semibold text-xl capitalize'>
                                            {car.make} {car.model}
                                        </h2>

                                        <div className='mt-3 flex flex-wrap gap-4'>
                                            {Object.entries(car).map(([key, value]) => (
                                                <div className='flex justify-between gap-5 w-full text-right' key={key}>
                                                    <h4 className='text-grey capitalize'>{key.split("_").join(" ")}</h4>
                                                    <p className='text-black-100 font-semibold'>{value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>

                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default CarDetails