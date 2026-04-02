'use server'
import {isRedirectError} from "next/dist/client/components/redirect-error";
import {signIn} from "@/lib/auth";

export async function loginAction(credentials) {
    const {email, password} = credentials
    try {
        const res = await signIn("credentials", {
            email: email, password: password, redirectTo: "/products"
        })
        console.log(res)
        if (res.error) throw new Error("Unauthorize")

        return res
    } catch (err) {
        if (isRedirectError(err)) throw err
    }
}
