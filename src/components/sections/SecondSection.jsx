import Register from "../Register"

function SecondSection() {

  return (
    <div className="h-[100vh]">
      <p className="text-black text-[1.5rem] font-medium mb-4 mt-12 px-12">Take your office out to lunch</p>
      <div id="second_section" className="relative">
        <div className="absolute top-[60%] w-[65%] left-12">
          <Register />
        </div>
      </div>
    </div>
  )
}

export default SecondSection
  