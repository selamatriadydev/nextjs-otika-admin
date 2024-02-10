// "use server";

import { signIn } from "../auth";

export const authenticate = async (prevState, formData) => {
    const { username, password} = Object.fromEntries(formData);
    
    try{
      await signIn("credentials", {username, password});
    }catch(err){
      return "wrong credentials!";
    } 
}