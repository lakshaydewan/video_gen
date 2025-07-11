import React from 'react'
import { auth } from "@clerk/nextjs/server";

const Page = async () => {

    const { getToken } = await auth();
    console.log('Token:', await getToken());

    return (
        <div>

        </div>
    )
}

export default Page