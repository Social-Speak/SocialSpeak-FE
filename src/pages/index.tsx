import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useCallback, useState } from 'react'
import router from 'next/router'
import { Button, TextField } from '@mui/material'
import Google from '@/components/shared/icons/google'
import { signIn, useSession } from 'next-auth/react'
import useUserData from '@/lib/hooks/useUserData'
import LoadingDots from '@/components/shared/icons/loading-dots'
import { useDispatch } from 'react-redux'
import { UserStorePayload, setUser } from '@/store/user/userSlice'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [buttonClicked, setButtonClicked] = useState(false)
  const dispatch = useDispatch()

  const { data: session } = useSession()

  const handleSignInGoogle = useCallback(async () => {
    setButtonClicked(true)
    await signIn("google")
    const sessionUser = await session?.user as UserStorePayload
    dispatch(setUser(sessionUser))
  }, [dispatch, session])

  const { currentUser } = useUserData()


  console.log(`currentUser`, currentUser)
  console.log(`currentUserData`, session)
  return (
    <div className='flex flex-col w-full h-screen bg-gradient-to-br from-cyan-100 via-slate-50 to-teal-100'>
      <div className='absolute flex ml-4  h-fit items-center gap-1 z-20'>
        <Image src={'/chatifylogo.png'} width={40} height={40} alt={'logo'} />
        <h1 className='font-semibold mt-1'>Chatify</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2  items-center w-full h-full mx-auto md:gap-20 md:p-10'>
        <div className="flex w-full justify-end items-center z-20">
          <div className='flex flex-col w-full md:max-w-xl items-center min-h-[400px] h-fit py-10 rounded-t-[32px] bg-white border md:py-10 px-16 absolute bottom-0 md:relative  md:rounded-[32px] md:min-h-[400px] md:max-h-[700px] shadow-md gap-5'>
            <h2 className='text-xl md:text-2xl font-semibold'>Login to your account</h2>
            <Button variant='outlined' className='flex items-center gap-4 w-full p-4 rounded-2xl' onClick={handleSignInGoogle}>
              {
                buttonClicked ?
                  <div className='w-8 h-fit my-auto '>
                    <LoadingDots />
                  </div>
                  :
                  <>
                    <Google className='w-5 h-5' />
                    <p>Sign In with Google</p>
                  </>
              }
            </Button>
            <span>OR</span>
            <div className="flex flex-col w-full gap-2 font-semibold text-lg ">
              <label htmlFor="">Email</label>
              <TextField
                size='small'
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>
            <div className="flex flex-col w-full gap-2 font-semibold text-lg">
              <label htmlFor="">Password</label>
              <TextField
                size='small'
                variant="outlined"
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button variant='contained' className='w-full bg-blue-500'>Log in</Button>
            <div className="create-account">
              Don’t have an account? <span className='hover:cursor-pointer hover:underline hover:text-blue-600' onClick={() => router.push('/signup')}>Sign Up</span>
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
