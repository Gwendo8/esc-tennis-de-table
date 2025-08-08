import React from "react";
import { Calendar, Users } from 'lucide-react';

import ButtonRed from "./components/buttonRed";
import ButtonWhite from "./components/buttonWhite";
import NavBar from "./components/navbar";

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-red-25">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center"> 
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-800 ring-1 ring-inset ring-red-500/10 hover:bg-red-100"> {/* Styles de Badge */}
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
                alt="Joueurs de tennis de table en action"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
