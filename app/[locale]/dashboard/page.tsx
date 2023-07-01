"use client"
import { NextPage } from 'next'
import axios from "axios";

import { UserPlusIcon } from '@heroicons/react/24/outline'
import { CreditCardIcon, CurrencyDollarIcon } from '@heroicons/react/20/solid';

import Image from 'next/image'

//Compontents
import './Dashboard.css'
import MainCard from '@/app/particles/mainCard/MainCard';
import TransferCard from '@/app/particles/transferCard/TransferCard';
import Header from '../../components/header/Header';
import { useTranslations } from 'next-intl';

let metrics : Metrics[] = [
    { name: "New Users", value: "" , icon: UserPlusIcon },
    { name: "Total Users", value: "" , icon: UserPlusIcon }
]
const transferMetrics : Metrics[] = [
    { name: 'Profit', value: '$2500.52' , icon: CurrencyDollarIcon },
    { name: 'Wallet', value: '$5432' , icon: CreditCardIcon }
  ]

  
interface Props {}
  
const Page: NextPage<Props> = ({}) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL
    const i18n = useTranslations('dashboard');
    
    // Function to fetch Metrics details
    const getMetricsData =  () =>{
        axios({
            url: baseUrl + "metrics.json",
            method: "GET"
        }).then((res : getMetricsResponse) =>  {
            //Updating the value from API response
            res.data.forEach((element : Metrics) => {
                metrics.filter((value : Metrics) => {
                    if(value.name == element.name){
                        value.value = element.value
                    }
                })
            });
        })

    }
    
    getMetricsData()

    return (
        <>
            <Header/>
            <div className="container dashboard-cont flex space-x-4 mx-auto mt-5">
                <div className='w-8/12'>
                    <div className='mb-4'>{i18n('OverallStatus')}</div>
                    <div className='flex space-x-4 h-full'>{metrics.map((item , index)=>(
                        <div key={index} className="w-1/2">
                            <MainCard items={item}></MainCard>
                        </div>
                    ))}</div>
                </div>
                <div className='w-4/12'>
                    <div className='mb-4'>{i18n('TransferStatus')}</div>
                    <div className='flex flex-col space-y-4'>{transferMetrics.map((item , index)=>(
                        <div key={index} className="w-full">
                            <TransferCard items={item}></TransferCard>
                        </div>
                    ))}</div>
                </div>
            </div>
        </>
    )
}

export default Page
