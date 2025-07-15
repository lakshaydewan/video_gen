import { auth } from "@clerk/nextjs/server"

export const getProjects = async () => {
    const { getToken } = await auth()
    const token = await getToken()
    console.log("token", token)

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/project`, { 
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    const data = await res.json()

    console.log("data from API", data)

    return data.projects
}