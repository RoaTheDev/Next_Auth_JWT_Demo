'use server'
import {auth} from "@/lib/auth";

export async function getAllProducts() {
    const session = await auth()
    const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_API_URL}/products`, {
        headers: {
            Authorization: `Bearer ${session?.user?.token}`
        }
    })
    return await res.json();
}