import CityBox from "../CityBox"


function CitiesSection() {

  return (
    <div className="flex flex-col gap-6 px-12">
      <p className="text-gray text-[1.5rem] font-medium mb-4">Find us in these cities and many more!</p>
      <div className="flex gap-6">
        <CityBox />
        <CityBox />
        <CityBox />
        <CityBox />
      </div>
      <div className="flex gap-6">
        <CityBox />
        <CityBox />
        <CityBox />
        <CityBox />
        </div>
        <div className="flex gap-6">
      <CityBox />
      <CityBox />
      <CityBox />
      <CityBox />
        </div>
    </div>

  )
}

export default CitiesSection
