"use client"
import React from 'react'
import { useState, Fragment } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { CustomFilterProps, updateSearchParams } from '@/types'

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  const handleParams = (e:{title:string,value:string}) => {
    const newPathname = updateSearchParams(title,e.value.toLowerCase());

    router.push(newPathname, { scroll: false })
  }

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) =>{ 
        setSelected(e);
        handleParams(e);
      }}
      >
        <div className="relative z-10 w-fit">
          <ListboxButton className={`custom-filter__btn`}>
            <span className='block truncate'>{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20} height={20}
              className='object-contain ml-4'
              alt='Chevron up and Down' />
          </ListboxButton>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >

            <ListboxOptions className={`custom-filter__options`}>
              {options.map((option) => (
                <ListboxOption key={option.title} value={option} className={({ active }) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'
                  }}`}>
                  {({ selected }) => (
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{option.title}</span>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>

          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter