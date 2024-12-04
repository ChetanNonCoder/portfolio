import HeroImage from "../../../public/images/HeroImage.png"


export default function HeroSection() {
  return (
   <div className='md:flex justify-between bg-black text-white'>
        
       <div className="pt-5 md:pt-36">
            <div className="pl-32 md:pl-4"style={{
              fontFamily: 'parkin, sans-serif'
              }} >
              <h1 className="text-3xl ">Hi, I'm Chetan !!</h1>
            </div>
            <div className="pt-2 pl-16 md:pl-4">
              <span className="text-[20px] px-1 md:text-[27px]" style={{
              fontFamily: 'parkin, sans-serif'
              }}>Web developer/ Frontend Designer</span>
            </div>
            <div className="pt-1 pl-4 hidden md:block">
              <span className="text-[27px] from-neutral-600" style={{
              fontFamily: 'parkin, sans-serif'
              }}>Creative Problem-Solvers</span>
            </div>
            <div className="pl-4 hidden md:block pt-6">

            <span className="text-[20px]" style={{
              fontFamily: 'parkin, sans-serif'
              }}>- With a passion for building interactive,</span>
            </div>
            <div className="hidden md:block text-[20px] pl-4">
              <span style={{
              fontFamily: 'parkin, sans-serif'
              }}> user friendly application</span>
            </div>
    </div>
    <div className="pt-6">
            <img 
            src={HeroImage} 
            alt="" />
        </div>
   </div>
  );
}
