import React from 'react';

import Image from "next/image";


const TransferCard = (props : any) => {
  return (
        <div className='p-6 w-full flex flex-row justify-between min-h-max h-38 transfer-card-cont rounded-lg bg-gray-100 ring-1 ring-gray-900/10'>
            <div className=''>
                <div>{props.items.name}</div>
                <div className='w-20'>
                    <props.items.icon className="w-full"/>
                </div>
            </div>
            <div className='self-start justify-self-end'>{props.items.value}</div>
        </div>
    )
}

export default TransferCard