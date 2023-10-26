import homepagepng from "@/public/homepageimg.png"
import Image from "next/image"
const Home = () => {
  return (
    <div className="flex flex-wrap justify-around mt-20">
        {/* left div */}
        <div className="ml-[4rem]  w-[28rem]" >
            <h1 className="text-5xl text-black font-Mulish">Virtual healthcare for you</h1>
            <p className="mt-6 text-xl text-gray-500" >Trafalgar provides progressive, and affordable 
healthcare, accessible on mobile and online 
for everyone</p>
        <button className="w-56 h-16 text-white bg-[#458FF6] rounded-[55px] mt-6 ">Consult today</button>
        </div>
        <Image
        src={homepagepng}
        width={550}
        height={550}
        alt="homepageimg"
        />
        <div ></div>
    </div>
  )
}

export default Home