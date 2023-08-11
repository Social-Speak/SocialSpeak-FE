import { getCurrentUserData } from '@/store/user/userSelector'
import { resetUser, setUser } from '@/store/user/userSlice'
import { useSession } from 'next-auth/react' 
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { UserStorePayload } from '@/store/user/userSlice'

export default function useUserData() {
    const dispatch = useDispatch()
    const { data: session, status } = useSession()
    const currentUser = useSelector(getCurrentUserData)

    useEffect(() => {
        if (!currentUser && session?.user) {
            const userPayload = session?.user as UserStorePayload
            dispatch(setUser(userPayload))
        }
        if(!session?.user && currentUser?.email) {
            dispatch(resetUser())
        }
    }, [dispatch, currentUser, session])

    return {session, currentUser , status}
}
