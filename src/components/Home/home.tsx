import Card from "../Card/card1";
import ShimmerButton from "../ui/shimmer-button";

export default function Home() {
  return (
    <>
      <div className="md:flex flex-col gap-40">
      <div className="md:place-items-center pt-48"  style={{
              fontFamily: 'parkin, sans-serif'
              }}>
        <div className="text-6xl">
          <span>Hi I'm </span><span className="font-bold text-[#EC8305]">Chetan !!</span>
        </div>
        <div className="text-4xl pt-3"><h3>Web Developer/Frontend Designer</h3></div>
        <div className="text-2xl pt-4">
          <span>With a passion for building interactive, user-friendly application</span>
        </div>
        <div className="pt-8">
        <ShimmerButton className="shadow-2xl h-11">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Know More
        </span>
       </ShimmerButton>
        </div>
     </div>
     {/* card section */}
      <div className="md:flex">
      <Card/>
      <Card/>
      <Card/>
     </div>
      </div>
    </>
  );
}


//     <div className='md:flex items-center bg-white text-black'>
//     <div className="pt-5 md:pt-52 ">
//          <div className="pl-32 md:"style={{
//            fontFamily: 'parkin, sans-serif'
//            }} >
//            <h1 className="text-3xl ">Hi, I'm Chetan !!</h1>
//          </div>
//          <div className="pt-2 pl-16 md:pl-3">
//            <span className="text-[20px] px-1 md:text-[24px]" style={{
//            fontFamily: 'parkin, sans-serif'
//            }}>Web developer/ Frontend Designer</span>
//          </div>
//          {/* <div className="pt-1 pl-4 hidden md:block">
//            <span className="text-[27px] from-neutral-600" style={{
//            fontFamily: 'parkin, sans-serif'
//            }}>Creative Problem-Solvers</span>
//          </div> */}
//          <div className="pl-4 hidden md:block pt-3">

//          <span className="text-[15px]" style={{
//            fontFamily: 'parkin, sans-serif'
//            }}>With a passion for building interactive,</span>
//          </div>
//          <div className="hidden md:block text-[15px] pl-4">
//            <span style={{
//            fontFamily: 'parkin, sans-serif'
//            }}> user friendly applications</span>
//          </div>
//  </div>
//  <div className="pt-6">
 
//      </div>
     
// </div>