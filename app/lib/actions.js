// "use server";

export const authenticate = async (prevState, formData) => {
    const { username, password} = Object.fromEntries(formData);
    try{
        return `Welcome ${username}`;
    }catch(err){
      return "wrong credentials!";
    }
  
  }