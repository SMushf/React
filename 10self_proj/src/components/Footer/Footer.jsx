

export const Footer = () => {
  return (
    <div className="bg-gray-100 h-20 w-full">
      <div className="h-8">
        <marquee direction="left" className="text-emerald-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam voluptate amet eveniet nostrum temporibus dolorum doloribus, quibusdam corrupti facilis.</marquee>
        <marquee direction="right" className="text-emerald-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam voluptate amet eveniet nostrum temporibus dolorum doloribus, quibusdam corrupti facilis.</marquee>
      </div>
      <div className="flex gap-40 justify-between items-bottom h-12">
        <div className="text-gray-400 h-7 w-80 mt-5 ml-5 font-bold">
            @Copyright - 20007/4000
        </div>
        <div className="text-gray-400 h-7 w-80 mt-5 text-center font-bold">
            S5M7Musharraf@gmail.com
        </div>
      </div>    
    </div>
  )
}
