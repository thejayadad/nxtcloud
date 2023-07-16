
import Memory from "@/component/memory"

export default function Home() {
  return (
    <section className='w-full mt-[40px] mb-[40px] bg-gray-200 shadow-lg rounded-md py-6 md:px-10 px-4 max-w-screen-md m-auto'>
      <div className='grid grid-rows-4 grid-flow-col gap-4'>
        
      <Memory />
     
      </div>
    </section>
  )
}
