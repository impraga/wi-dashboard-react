import React, { useContext } from "react";
import { useGlobalContext } from '@/app/context/store'
import Image from 'next/image'
import { useTranslations } from "next-intl";

const Header = () => {
  const userDetails = useGlobalContext()
  const i18n = useTranslations('header');
  return (
  <div className='w-screen h-14 bg-slate-900 text-cyan-50'>
    <div className='h-full flex justify-between content-center px-7'>
      <div></div>
      <div className="self-center">{i18n('welcome')} <b>{userDetails.userDetails.name}</b></div>
    </div>
  </div>)
}

export default Header
