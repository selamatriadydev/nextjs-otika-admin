import NextAuth from "next-auth";
import dataUsers from "./data/login/dataUsers";
import { authConfig } from "./authConfig";
import CredentialsProvider from "next-auth/providers/credentials"
// import bcrypt from "bcrypt";

const login = async (credentials) => {
    try {
        // Cari pengguna dengan nama pengguna tertentu
        const user = dataUsers.find((user) => user.username === credentials.username);
        if (!user) throw new Error("User not found!");
        // Periksa apakah kata sandi cocok
        // const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
        // if (!isPasswordCorrect) throw new Error("Wrong password!");
        if (user.password !== credentials.password) throw new Error('Wrong password!');
        // Jika kedua kondisi terpenuhi, kembalikan pengguna
        return user;
    } catch (err) {
        throw new Error("Failed to login!");
    }
};

export const {signIn, signOut, auth} = NextAuth({
    ...authConfig,
    providers: [
      CredentialsProvider({
        async authorize(credentials) {
          try {
              const user = await login(credentials);
              return user;
          } catch (error){
              return null;
          }
        },
      }),
    ],
    callbacks: {
      async jwt({token, user}){
          if(user){
              token.username=user.username;
              token.img=user.img;
          }
          return token;
      },
      async session({session, token}){
          if(token){
              session.user.username=token.username;
              session.user.img=token.img;
          }
          return session;
      }
    }
  })
