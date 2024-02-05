function HomepageHero() {

  return (
    <div className="flex">
      <div>
        <p>It's the food and groceries you love, delivered</p>
        <div className="flex bg-white p-4">
          <div className="bg-white flex outline outline-gray rounded-lg">
            <input className=""></input>
            <button className="flex items-center gap-2 bg-transparent">
              <img src="./images/worldwide.png" className="w-4"></img>
              <span className="text-primary">Locate me</span>
            </button>
          </div>
          <button className="bg-primary text-white">Find food</button>
        </div>
      </div>
      <div id="hero">

      </div>
    </div>
  )
}

export default HomepageHero
  