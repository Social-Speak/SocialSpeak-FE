/* eslint-disable react-hooks/rules-of-hooks */
import Modal from '@/components/shared/modal'
import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import router from 'next/router'
import { Button, TextField } from '@mui/material'
import Google from '@/components/shared/icons/google'
import { signIn, useSession } from 'next-auth/react'
import useUserData from '@/lib/hooks/useUserData'
import LoadingDots from '@/components/shared/icons/loading-dots'
import axios from 'axios'

export default function index() {
    const [showModal, setShowModal] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const [buttonClicked, setButtonClicked] = useState(false)


    const handleSignUp = useCallback(async () => {
      const payload = {
        email: email,
        password: password,
        username: username
      }

      try {
        const res = await axios.post('https://social-speak.fly.dev/register', payload)  
        console.log(res.data)
        if(res.data){
          console.log(res.data)
          router.push('/')
        }
      } catch (error) {
        // console.error(error.message)
      }
    },[email, username, password])

    return (
        <div className='flex flex-col w-full h-screen bg-gradient-to-br from-cyan-100 via-slate-50 to-teal-100'>
      <div className='absolute flex ml-4  h-fit items-center gap-1 z-20'>
        <Image src={'/chatifylogo.png'} width={40} height={40} alt={'logo'} />
        <h1 className='font-semibold mt-1'>Chatify</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2  items-center w-full h-full mx-auto md:gap-20 md:p-10'>

        <div className="flex w-full justify-end items-center z-20">
          <div className='flex flex-col w-full md:max-w-xl items-center min-h-[400px] h-fit py-10 rounded-t-[32px] bg-white border md:py-10 px-16 absolute bottom-0 md:relative  md:rounded-[32px] md:min-h-[400px] md:max-h-[700px] shadow-md gap-5'>
            <h2 className='text-xl md:text-2xl font-semibold mb-5'>Register your account</h2>
            
          <form action="" onSubmit={handleSignUp} className='w-full flex flex-col gap-5'>
          <div className="flex flex-col w-full  font-semibold text-lg ">
              <label htmlFor="">Email</label>
              <TextField
                size='small'
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>
            <div className="flex flex-col w-full  font-semibold text-lg ">
              <label htmlFor="">Username</label>
              <TextField
                size='small'
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

            </div>
            <div className="flex flex-col w-full  font-semibold text-lg">
              <label htmlFor="">Password</label>
              <TextField
                size='small'
                variant="outlined"
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button variant='contained' className='w-full bg-blue-500' type='submit'>Register</Button>
          </form>
            <div className="create-account">
              Already have an account? <span className='hover:cursor-pointer hover:underline hover:text-blue-600' onClick={() => router.push('/')}>Login</span>
            </div>
          </div>
        </div>


        <div className="flex w-full items-center absolute -top-10 z-10 md:relative md:mt-20">
          <Image width={576} height={600} src={'/bg1.png'} alt={'bg'} priority />
        </div>


      </div>
    </div>
    )
}
