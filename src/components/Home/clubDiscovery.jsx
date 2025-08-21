import Card from "../Home/card";
function ClubDiscovery() {
    return (
       <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 items-center text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Découvrir le Club
            </h2>
            <p className="text-lg text-gray-600 max-w-xl text-center">
              Explorez toutes les facettes de notre club
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Card
              img="/img/galerie1.jpg"
              title="Nos équipes"
              description="Découvrez nos équipes et leurs résultats"
            />
            <Card
              img="/img/galerie2.jpg"
              title="Nos entraînements"
              description="Programmes adaptés à tous les niveaux"
            />
            <Card
              img="/img/galerie3.jpeg"
              title="Nos installations"
              description="Des équipements modernes et entretenus"
            />
            <Card
              img="/img/galerie4.jpeg"
              title="Nos événements"
              description="Tournois, stages et moments conviviaux"
            />
          </div>
        </div>
    )
}

export default ClubDiscovery;