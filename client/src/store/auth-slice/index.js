import { createSlice } from ("@reduxjs/toolkit");
// const { User } = require("lucide-react");



const initialState = {
    isAuthenticated :false ,
    isLoading : false ,
    User : null
};



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {
        setUser:(state,action)=>{ },
    },
});

export const {setUser} = authSlice.actions;
export default authSlice.reducer;