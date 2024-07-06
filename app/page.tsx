import Image from "next/image";
import image from "/public/avatar.jpg";

export default function Home() {
  return (
    <main className="p-10">
      <div className=" gap-6 flex transition duration-500 hover:shadow-2xl items-center rounded-xl bg-muted shadow-sm border p-6 ">
        <div className="
        aspect-square rounded-lg overflow-hidden border-2 border-primary-foreground border w-20 relative
        group-hover:scale-125 group-hover:-rotate-12 group-hover:shadow-md
        transition duration-500
        ">
          <Image src={image} alt="" />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-xl mb-1">leo</h2>
          <p className="text-muted-foreground">Hello! I'm leo.</p>          
        </div>

      </div>


      <div className="[perspective:2000px] group w-fit mx-auto relative">
        <div className="bg-card border absolute bottom-4 left-4 w-full p-6 z-20 rounded shadow-md ">
          Hint

          <div className="opacity-0 groupt-has-[[:hover(#hero)]]:opacity-100"></div>  
        </div>
        <div className="border group w-80 mx-async function name(params:type){

        } [transform:rotateY(-14deg)_rotateX(45deg)] [transform-style:preserve-3d] rounded-lg shadow-sm mt-20 ">
          <div className="flex gap-2 p-4 border-b *:size-2.5 *:rounded-full bg-muted/80">
            <div className="bg-red-500"></div>
            <div className="bg-yellow-500"></div>
            <div className="bg-green-500"></div>
          </div>
          <div className="aspect-[3/4] p-4 [transform-style:preserve-3d]">
            <div 
            id="hero"
            className="aspect-video rounded shadow transition duration-500 hover:shadow-2xl
            hover:[transform:translateZ(40px)] bg-zinc-400">
              <div className="p-4 opacity-0 transition duration-500 group-hover:opacity-100 ">
                <h2>Campaign</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className="h-4 rounded-full border overflow-hidden bg-muted mt-10">
              <div className="size-full bg-lime-500 origin-left scale-x-0
              transition duration-500
              group-hover:scale-x-100"></div>
            </div>

            <div className="border rounded-lg bg-muted shadow-sm w-1/2 aspect-video mt-10
            scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100
            transition duration-500">

            </div>
          </div>
        </div>      
      </div>

    </main>
  )
}
