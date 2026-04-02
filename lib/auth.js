import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import {loginService} from "@/service/authService";

export const {auth, handlers, signIn, signOut} = NextAuth({
    secret: process.env.BETTER_AUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: '/login'
    },
    callbacks: {
        jwt: async ({token, user}) => {
            if (user) token.user = user
            console.log("this is token :", token);
            return token
        },
        session: async ({session, token}) => {
            if (token && token.user) {
                session.user = token.user;
            }
            console.log("this is session : ", session);
            return session;
        }
    },

    providers: [
        Credentials({
                name: "credentials",
                credentials: {
                    email: {},
                    password: {},
                },
                async authorize(credentials) {
                    try {

                        const res = await loginService(credentials)

                        const loggedUser = await res.json();
                        if (loggedUser.error === "unauthorized") {
                            throw new Error("User does not exit!");
                        }
                        console.log(loggedUser)
                        return loggedUser.payload
                    } catch (err) {
                        console.log("IDK something wrong:", err)
                        return null
                    }
                }
            }
        )
    ],
})