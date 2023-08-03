import { RootState } from "@/redux/store/store";

export const getCurrentUserData = ({user} : RootState) => {
    return user.currentUser
}