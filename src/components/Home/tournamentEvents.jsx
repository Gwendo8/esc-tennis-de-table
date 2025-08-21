import ButtonRed from "../Button/buttonRed";
import { Calendar} from "lucide-react";
function TournamentEvents() {
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
    return (
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
    )
}

export default TournamentEvents;