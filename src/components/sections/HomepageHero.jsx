function HomepageHero() {

  return (
    <div className="flex" id="hero">
      <div className="w-[55%] px-12">
        <p className="text-[1.75rem] font-medium text-gray mt-32">It's the food and groceries you love, delivered</p>
        <div className="flex gap-4 mt-6 bg-white p-4 rounded-lg">
          <div className="bg-white flex outline outline-1 outline-[#bdbdbd] rounded-lg">
            <input className=""></input>
            <button className="flex items-center gap-2 bg-transparent">
              <img src="./images/worldwide.png" className="w-4"></img>
              <span className="text-primary">Locate me</span>
            </button>
          </div>
          <button className="bg-primary text-white">Find food</button>
        </div>
      </div>
      
    </div>
  )
}

export default HomepageHero
  