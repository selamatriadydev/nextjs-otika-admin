import NextAuth from "next-auth";
import { authConfig } from "./app/authConfig";

export default NextAuth(authConfig).auth;

export const config = {
    // matcher: ['/((?!api|_next/static|_next/image|.png|.jpg).*)'],
    matcher: ['/((?!api|static|.*\\..*|_next).*)'],
    // matcher: ['/((?!static|.*\\..*|_next).*)'],
}
