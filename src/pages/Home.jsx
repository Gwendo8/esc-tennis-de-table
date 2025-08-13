import React from "react";
import { Calendar, Users } from "lucide-react";

import ButtonRed from "../components/buttonRed";
import ButtonWhite from "../components/buttonWhite";
import NavBar from "../components/navBar";

function Home() {
  const event = [
    {
      id: 1,
      title: "Stage ESCF été",
      date: "19-21 août 2025",
      description:
        "Stage d'été pour les joueurs, avec des entraînements intensifs et des activités ludiques.",
      image: "/img/stage-escf-ete.jpg",
    },
    {
      id: 2,
      title: "Stage ESCF été",
      date: "26-28 août 2025",
      description:
        "Stage d'été pour les joueurs, avec des entraînements intensifs et des activités ludiques.",
      image: "/img/stage-escf-ete.jpg",
    },
    {
      id: 3,
      title: "Assemblée Générale ESCF",
      date: "13 Septembre 2025",
      description:
        "Petit tournoi interne suivi d'un repas convivial pour tous les membres.",
      image: "/img/assemblee-generale.jpg",
    },
    {
      id: 4,
      title: "Tournoi de Faulquemont",
      date: "20-21 Septembre 2025",
      description:
        "Venez participer à notre tournoi annuel, ouvert à tous les licenciés.",
      image: "/img/tournoi-faulquemont.jpg",
    },
  ];
  const galerie = [
    { id: 1, image: "/img/galerie1.jpg" },
    { id: 2, image: "/img/galerie2.jpg" },
    { id: 3, image: "/img/galerie3.jpeg" },
    { id: 4, image: "/img/galerie4.jpeg" },
    { id: 5, image: "/img/tournoi-faulquemont.jpg" },
    { id: 6, image: "/img/tournoi-faulquemont.jpg" },
    { id: 7, image: "/img/tournoi-faulquemont.jpg" },
    { id: 8, image: "/img/tournoi-faulquemont.jpg" },
  ];
  return (
    <div className="min-h-screen bg-background bg-gradient-to-br from-gray-50 to-red-50 overflow-hidden">
      <NavBar />
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-lg font-medium text-red-800 ring-1 ring-inset ring-red-500/10 hover:bg-red-100">
                {" "}
                Depuis 1985
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Club de Tennis de Table de
                <span className="text-red-600"> Faulquemont</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Rejoignez notre club convivial et dynamique ! Que vous soyez
                débutant ou confirmé, nous vous accueillons dans une ambiance
                chaleureuse pour partager la passion du tennis de table.
              </p>
              <div className="flex flex-col lg:flex-row gap-4">
                <ButtonRed
                  icon={<Users className="mr-2 h-5 w-5" />}
                  text="Nous rejoindre"
                  onClick={() => alert("Click sur le bouton nous rejoindre")}
                />
                <ButtonWhite
                  icon={<Calendar className="mr-2 h-5 w-5" />}
                  text="Planning des entraînements"
                  onClick={() =>
                    alert("Click sur le bouton planning des entraînements")
                  }
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/img-accueil.jpg"
                alt="Photos des 3 premières équipes"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-300 to-transparent my-12"></div>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Tournoi à Venir Section */}
            <div>
              <div className="flex flex-col gap-4 items-center text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Tournoi à Venir
                </h2>
                <p className="text-lg text-gray-600 max-w-xl">
                  Ne manquez pas notre tournoi annuel ouvert à tous les niveaux
                  !
                </p>
              </div>
              <div className="border border-red-100 rounded-xl shadow-lg overflow-hidden bg-white">
                {/* En-tête */}
                <div className="text-center pb-4 pt-6">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Tournoi de Faulquemont 2025
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Compétition ouverte à tous les licenciés
                  </p>
                </div>
                {/* Contenu */}
                <div className="flex flex-col items-center p-0">
                  <img
                    src="/img/tournoi-faulquemont.jpg"
                    alt="Tournoi de Faulquemont"
                    className="w-full h-auto object-cover rounded-t-xl"
                  />
                  <div className="p-6 text-center">
                    <p className="text-gray-700 mb-4">
                      Préparez-vous pour une journée de compétition intense et
                      de camaraderie. Inscriptions bientôt ouvertes !
                    </p>
                    <div className="flex items-center justify-center gap-2 text-gray-600 text-sm mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>Date: 15 Juin 2025</span>
                    </div>
                    <ButtonRed text="En savoir plus" />
                  </div>
                </div>
              </div>
            </div>
            {/* Prochains Événements Section */}
            <div>
              <div className="flex flex-col gap-4 items-center text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Prochains Événements
                </h2>
                <p className="text-lg text-gray-600 max-w-xl">
                  Restez informés de toutes nos activités
                </p>
              </div>
              <div className="space-y-6">
                {/* Tous les événements */}
                {event.map((evenement) => (
                  <div
                    className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-white"
                    key={evenement.id}
                  >
                    <div className="flex-shrink-0 text-red-600">
                      <Calendar className="h-8 w-8" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {evenement.title}
                      </h3>
                      <p className="text-gray-600 flex items-center gap-2 mt-1 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{evenement.date}</span>
                      </p>
                      <p className="text-gray-700 text-sm mt-2">
                        {evenement.description}
                      </p>
                    </div>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex-shrink-0">
                      Détails
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-300 to-transparent my-12"></div>
      <section>
        <div className="container mx-auto px-4 text-center py-12">
          <div className="flex flex-col gap-4 items-center text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Galerie Photos
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Découvrez l'ambiance de notre club
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 max-w-full mx-auto">
              {galerie.map((photo) => (
                <img
                  key={photo.id}
                  className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  src={photo.image}
                  alt={`Galerie ${photo.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
