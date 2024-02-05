

function TopMenu() {

  return (
    <div className="flex justify-between px-12 py-4 bg-white shadow-xl">
      <div className="flex items-center gap-2">
        <img src="./images/logo.png" className="w-8 h-8"/>
        <p className="text-primary font-semibold text-[1.5rem]">foodpanda</p>
      </div>
      <div className="flex gap-4">
        <button className="text-primary outline outline-1 outline-primary text-[0.85rem]">Log In</button>
        <button className="bg-primary text-white text-[0.85rem]">Sign Up</button>
        <div className="flex items-center gap-2">
          <img src="./images/worldwide.png" className="w-4 h-4"/>
          <p>EN</p>
          <img src="./images/down-arrow.png" className="w-4 h-4"/>
        </div>
        <img src="./images/shopping-bag.png" className="self-center w-8 h-8"/>
      </div>
    </div>
  )
}

export default TopMenu
