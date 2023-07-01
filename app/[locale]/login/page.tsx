"use client"
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useGlobalContext } from "../../context/store";
import axios from "axios";
import {useTranslations} from 'next-intl';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const router = useRouter();
  const loginContext = useGlobalContext()
  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  const i18n = useTranslations('login');

  // Function to fetch User details on login
  const login = () =>{
    axios({
      url: baseUrl + 'userDetails.json',
      method: 'GET'
    }).then((res: userDetailsResponse) =>{
      console.log(res.data)
      loginContext.setUserDetails(res.data)
    })
    router.push("/dashboard")
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col w-1/4">
        <label className="block mb-5">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          {i18n('email')}
          </span>
          <input
            type="email"
            name="email"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="you@example.com"
          />
        </label>
        <label className="block mb-5">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          {i18n('password')}
          </span>
          <input
            type="password"
            name="password"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder=""
          />
        </label>
        <button
          onClick={login}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {i18n('login')}
        </button>
      </div>
    </div>
  );
};

export default Page;
