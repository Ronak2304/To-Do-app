function Navbar() {
  return (
    <nav className="flex cursor-pointer mx-10 mt-5 mb-5 text-2xl text-white justify-between">
      To-Plan
      <div className="flex gap-10 ">
        <div className="hover:text-gray-400 transition-all duration-700">
          Home
        </div>
        <div className="hover:text-gray-400 transition-all duration-700">
          Your Tasks
        </div>
      </div>
    </nav>
  )
}

export default Navbar
