
import Memory from "@/component/Memory"

export async function fetchMemories(){
  const res = await fetch('http://localhost:3000/api/memory', {cache: 'no-store'})

  return res.json()
}


export default async function Home() {
  const memories = await fetchMemories()

  return (
    <section className='w-full mt-[40px] mb-[40px] shadow-lg rounded-md py-6 md:px-10 px-4 max-w-screen-md m-auto'>
      <div className='grid grid-rows-4 grid-flow-col gap-4'>
     <div>
      {memories?.length > 0 
       ? memories.map((memory) => (
        <Memory key={memory._id} memory={memory}/>
      )) : <h3 className="text-center">No Memories</h3>}
      </div>
      </div>
    </section>
  )
}
