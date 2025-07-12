import { auth } from "@clerk/nextjs/server"

export const getProjects = async () => {
    const { getToken } = await auth()
    const token = await getToken()

    const res = await fetch("http://localhost:8000/project", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    const data = await res.json()

    console.log("data from API", data)

    return data.projects
}