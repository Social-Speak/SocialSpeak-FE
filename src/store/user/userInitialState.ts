export interface CurrentUser {
    email: string;
    image?: string;
    name?: string;
    expires?: string;
    lastSyncTime?: string;
  }
  
  export interface UserState {
    currentUser?: CurrentUser;
  }
  const UserInitialState: UserState = { currentUser: undefined };
  
  export default UserInitialState;
  