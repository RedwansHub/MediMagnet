import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <div className="w-full grid grid-cols-10 h-full gap-6">
        <div className="w-full h-full col-span-1">
        </div>
        <div className="w-full h-full flex-col gap-4 col-span-6 justify-center flex ">
          <h2>Magnetize with us</h2>
          <p className="w-full text-4xl">
            We are a dynamic digital marketing agency with a passion for innovation and a commitment to excellence.
          </p>
        </div>
        <div className="w-full flex-col col-span-2 bg-red-500 h-full flex justify-center text-white font-semibold text-xl items-center">
          <h2>Media</h2>
          <h2>Magnet</h2>
        </div>
        <div className="w-full col-span-1">
        </div>
      </div>
    </div>
  );
}
