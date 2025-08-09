import React from "react";
import { Calendar, Users } from "lucide-react";

import ButtonRed from "./components/buttonRed";
import ButtonWhite from "./components/buttonWhite";
import NavBar from "./components/navbar";

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 to-red-50 overflow-hidden">
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
              <div className="flex flex-col sm:flex-row gap-4">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex flex-col gap-4 items-center text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Tournoi à Venir
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Ne manquez pas notre tournoi annuel ouvert à tous les niveaux !
            </p>
          </div>
          <div className="border border-red-100 rounded-xl shadow-lg overflow-hidden">
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
                className="w-full h-auto object-cover"
              />
              <div className="p-6 text-center">
                <p className="text-gray-700 mb-4">
                  Préparez-vous pour une journée de compétition intense et de
                  camaraderie. Inscriptions bientôt ouvertes !
                </p>
                <div className="flex justify-center">
                  <ButtonRed text="En savoir plus"></ButtonRed>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
