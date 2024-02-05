function TopBanner() {

  return (
    <div className="bg-primary w-[100vw] flex justify-center items-center gap-8 p-2 relative">
      <img src="./images/close.png" className="absolute top-3 right-8 w-3"></img>
      <p className="text-white font-bold text-xl">Do you need a business account?</p>
      <button className="bg-primary outline text-white outline-1 text-[0.85rem]">SIGN UP NOW</button>
    </div>
  )
}

export default TopBanner
