import { useEffect, useState } from "react"
//import { useLoaderData } from "react-router-dom"

export default function Github() {

    //const data = useLoaderData()
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/SMushf`)
        .then((res) => res.json())
        .then(data => setData(data))
        console.log(data)
    }, [])
  return (
    <div className="bg-gray-600 text-white text-3xl p-4 text-center grid  place-content-center">
      <p>Hey! Welcome {data.name}</p>
      <img src={data.avatar_url} />
    </div>
  )
}


// export const GithubAPI = async () => {
//   const response = await fetch('https://api.github.com/users/SMushf')
//   return response.json()
  
// }
