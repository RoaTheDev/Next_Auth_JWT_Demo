import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function proxy(request) {
    const session = await auth();
    console.log("in the proxy :", session);
    if (!session) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    NextResponse.next()
}
export const config = {
    matcher: ["/products/:path*"],
};