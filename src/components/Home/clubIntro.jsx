import ButtonRed from "../Button/buttonRed";
import ButtonWhite from "../Button/buttonWhite";
import { Calendar, Users } from "lucide-react";
function ClubIntro() {
    return (
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-lg font-medium text-red-800 ring-1 ring-inset ring-red-500/10 hover:bg-red-100">
                {" "}
                Depuis 1985
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Club de Tennis de Table de
                <span className="text-red-600">Faulquemont</span>
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
                    alert("Click sur le bouton planning des entraînements")}
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
    );
}
export default ClubIntro;