const Header = () => {

  const onEternl = () => {
    alert("Eternl Clicked!");
  }

  const onNami = () => {
    alert("Nami Clicked!");
  }

  return (
    <header className="header z-10">
      <div className="flex flex-wrap items-center justify-between container px-4 py-6 mx-auto">
        <div className="flex items-center">
          <a className="font-logo ml-3 text-white uppercase text-sm md:text-lg" href="/">
            Poker Club
          </a>
        </div>
        
        <div className="group relative dropdown text-purple-500 hover:text-purple-700 cursor-pointer text-base uppercase tracking-wide font-bold" style={{fontFamily: "none"}}>
          <button className="peer mx-auto w-full tracking-wide inline-block bg-white hover:bg-gray-200 focus-visible:ring ring-indigo-300 text-center text-black	outline-none transition duration-100 px-6 py-3 uppercase">
            Connect Wallet
          </button>
          <div className="group-hover:block dropdown-menu absolute hidden h-auto w-full">
            <div className="top-0 w-full bg-white shadow uppercase grid justify-center">
              <button onClick={onEternl} className="py-3 w-full text-gray-900 hover:bg-gray-300 flex">
                <img className="items+-center" src={process.env.PUBLIC_URL + './assets/wallet/eternl.png'} style={{height:"30px"}} />
                <span className="text-center w-full align-text-center">Eternl</span>
              </button>
              <button onClick={onNami} className="py-3 w-full text-gray-900 hover:bg-gray-300 flex">
                <img src={process.env.PUBLIC_URL + './assets/wallet/na.png'} style={{height:"25px"}} />
                <span className="text-center w-full align-text-center">Nami</span>
              </button>
            </div>
          </div>
        </div>

        {/* <ul className="flex text-sm w-auto">
          <li className="mt-0 lg:ml-12">
            <a href="/" target="_blank" rel="noopener noreferrer" className="block text-white">
              <img src={process.env.PUBLIC_URL + '/icon/discord.svg'} />
            </a>
          </li>
          <li className="mt-0 ml-4 lg:ml-12">
            <a href="/" target="_blank" rel="noopener noreferrer" className="block text-white">
              <img src={process.env.PUBLIC_URL + '/icon/twitter.svg'} />
            </a>
          </li>
        </ul> */}

      </div>
    </header>
  );
}

export default Header;