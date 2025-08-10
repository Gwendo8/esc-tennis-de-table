function NavBar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-br from-gray-50/50 to-red-50/50 backdrop-blur supports-[backdrop-filter]:bg-gradient-to-br/30 border-b border-gray-200 shadow-md">
      <div className="container mx-auto p-5">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/img/logo-club.png"
                alt="Logo Club TT"
                className="w-full h-full object-cover"
              ></img>
            </div>
            <span className="font-bold text-lg md:text-2xl text-gray-900">
              Club TT Faulquemont
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="/"
              className="text-lg px-3 py-2 rounded-md font-medium hover:bg-red-50 transition-colors"
            >
              Accueil
            </a>
            <a
              href="/club"
              className="text-lg px-3 py-2 rounded-md font-medium hover:bg-red-50 transition-colors"
            >
              Le Club
            </a>
            <a
              href="/equipes"
              className="text-lg px-3 py-2 rounded-md font-medium hover:bg-red-50 transition-colors"
            >
              Équipes
            </a>
            <a
              href="/actualites"
              className="text-lg px-3 py-2 rounded-md font-medium hover:bg-red-50 transition-colors"
            >
              Actualités
            </a>
            <a
              href="/contact"
              className="text-lg px-3 py-2 rounded-md font-medium hover:bg-red-50 transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
