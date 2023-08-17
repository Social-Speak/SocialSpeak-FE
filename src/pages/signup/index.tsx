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
import { useForm, SubmitHandler } from "react-hook-form"


type Input = {
  email: string
  password: string
  username: string
}



export default function index() {

  const [buttonClicked, setButtonClicked] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<Input>()


  const handleSignUp: SubmitHandler<Input> = useCallback(async (data) => {
    setButtonClicked(true)
    try {
      const res = await axios.post('https://social-speak.fly.dev/register', data)
      console.log(res.data)
      if (res.data) {
        console.log(res.data)
        router.push('/')
      }
    } catch (error) {
      // console.error(error.message)
    }
  }, [])

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

            <form action="" onSubmit={handleSubmit(handleSignUp)} className='w-full flex flex-col gap-5'>
              <div className="flex flex-col w-full  font-semibold text-lg ">
                <label htmlFor="">Email</label>
                <TextField
                  size='small'
                  variant="outlined"
                  error={errors.email?.type === 'required'}
                  {...register('email', { required: true })}
                />

              </div>
              <div className="flex flex-col w-full  font-semibold text-lg ">
                <label htmlFor="">Username</label>
                <TextField
                  size='small'
                  variant="outlined"
                  error={errors.username?.type === 'required'}
                  {...register('username', { required: true })}
                />

              </div>
              <div className="flex flex-col w-full  font-semibold text-lg">
                <label htmlFor="">Password</label>
                <TextField
                  size='small'
                  variant="outlined"
                  type='password'
                  error={errors.password?.type === 'required'}
                  {...register('password', { required: true })}
                />
              </div>
              <Button
                variant='contained'
                className='w-full bg-blue-500'
                type='submit'>
                {buttonClicked ? <span className='h-6'><LoadingDots /></span> : <>Register</>}
                </Button>
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
