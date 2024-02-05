import TakeOut from "../TakeOut"

function FifthSection() {

  return (
    <div className="h-[100vh]">
      <p className="text-black text-[1.5rem] font-medium mb-4 mt-12 px-12">You prepare the food, we handle the rest</p>
      <div id="fifth_section" className="relative">
        <div className="absolute top-[60%] left-12 w-[65%]">
          <TakeOut />
        </div>
      </div>
    </div>
  )
}

export default FifthSection
  