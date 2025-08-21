import NavBar from "../components/navBar";
import ClubIntro from "../components/Home/clubIntro";
import TournamentEvents from "../components/Home/tournamentEvents";
import PhotoGallery from "../components/Home/photoGallery";
import ClubDiscovery from "../components/Home/clubDiscovery";

function Home() {
  return (
    <div className="min-h-screen bg-background bg-gradient-to-br from-gray-50 to-red-50 overflow-hidden">
      <NavBar />
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28">
        <ClubIntro/>
      </section>
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-300 to-transparent my-12">
      </div>
      <section className="py-12 md:py-20">
        <TournamentEvents />
      </section>
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-300 to-transparent my-12">
      </div>
      <section>
        <PhotoGallery />
      </section>
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-300 to-transparent my-12">
      </div>
      <section className="py-12">
        <ClubDiscovery />
      </section>
    </div>
  );
}

export default Home;
