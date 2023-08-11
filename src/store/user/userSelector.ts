import { RootState } from "@/store/RootReducer";

export const getCurrentUserData = ({user} : RootState) => {
    return user.currentUser
}