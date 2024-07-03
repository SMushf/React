import { useEffect, useState } from "react"


export default function Github() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https:/api.github.com/users/SMushf')
        .then((res) => res.json())
        .then((res) => setData(res))
    }, [])
  return (
    <div className="bg-gray-600 text-white text-3xl p-4 text-center">
      Github Follower: {data}
    </div>
  )
}

