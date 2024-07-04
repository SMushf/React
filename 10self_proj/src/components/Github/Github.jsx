import { useEffect, useState } from "react"

export const Github = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
            fetch(`https://api.github.com/users/SMushf`)
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    return (
      <>
        <div className="grid justify-items-center">
            <img src={data.avatar_url} alt="GithubProfile" className="rounded-3xl h-2/2" />
        </div>
        <div className="flex gap-20 justify-center items-center">
            <span className="text-emerald-400 text-4xl ml-2 mr-2 font-semibold">{data.login}</span>
            <span className="text-emerald-700 text-xl ml-2 mr-2">Followers: {data.followers}</span>
        </div>
      </>
    )
  }
  
  