import Register from "../Register"

function SecondSection() {

  return (
    <div className="h-[100vh]">
      <p className="text-black text-[1.5rem] font-medium mb-4 mt-12">You prepare the food, we handle the rest</p>
      <div id="second_section" className="relative">
        <div className="absolute top-[60%] w-[65%]">
          <Register />
        </div>
      </div>
    </div>
  )
}

export default SecondSection
  