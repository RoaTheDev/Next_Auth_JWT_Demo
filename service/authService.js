"use server"

export async function loginService(credentials) {
    return await fetch(`${process.env.NEXT_PUBLIC_AUTH_API_URL}/auths/login`,
        {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
                "Content-Type": "application/json"
            }
        })
}
