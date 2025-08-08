function NavBar() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/img/logo-club.png" alt="Logo Club TT" className="w-full h-full object-cover"></img>
            </div>
            <span className="font-bold text-xl">Club TT Faulquemont</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-sm font-medium hover:text-red-600 transition-colors">
              Accueil
            </a>
            <a href="/club" className="text-sm font-medium hover:text-red-600 transition-colors">
              Le Club
            </a>
            <a href="/equipes" className="text-sm font-medium hover:text-red-600 transition-colors">
              Équipes
            </a>
            <a href="/actualites" className="text-sm font-medium hover:text-red-600 transition-colors">
              Actualités
            </a>
            <a href="/contact" className="text-sm font-medium hover:text-red-600 transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
