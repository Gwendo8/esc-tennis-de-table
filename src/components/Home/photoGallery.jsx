function PhotoGallery() {
      
  const galerie = [
    { id: 1, image: "/img/galerie1.jpg" },
    { id: 2, image: "/img/galerie2.jpg" },
    { id: 3, image: "/img/galerie3.jpeg" },
    { id: 4, image: "/img/galerie4.jpeg" },
    { id: 5, image: "/img/galerie1.jpg" },
    { id: 6, image: "/img/galerie2.jpg" },
  ];
  return (
    <div className="container mx-auto px-4 text-center py-12">
          <div className="flex flex-col gap-4 items-center text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Galerie Photos
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Découvrez l'ambiance de notre club
            </p>
            <div className="md:flex md:flex-col md:gap-6">
              {Array.from({ length: Math.ceil(galerie.length / 3) }).map(
                (_, i) => {
                  const group = galerie.slice(i * 3, i * 3 + 3);
                  return (
                    <div
                      key={i}
                      className="grid grid-cols-1 lg:grid-cols-3 gap-2 max-w-full mx-auto"
                    >
                      {group[0] && (
                        <div className="col-span-2">
                          <img
                            src={group[0].image || "/placeholder.svg"}
                            alt=""
                            className="border-0 rounded-2xl w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="grid grid-cols-1 grid-rows-2 gap-2">
                        {group.slice(1).map((photo) => (
                          <img
                            key={photo.id}
                            src={photo.image || "/placeholder.svg"}
                            alt=""
                            className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                          />
                        ))}
                      </div>
                    </div>
                  );
                },
              )}
            </div>
          </div>
        </div>
  );
}

export default PhotoGallery;