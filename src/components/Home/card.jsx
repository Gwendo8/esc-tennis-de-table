import { ArrowRight } from 'lucide-react';

function Card({ img, title, description, href }) {
  return (
    <a href={href} className="group block">
      <div className="h-full bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-red-100 transition-all duration-300">
        <div className="relative overflow-hidden">
          <img
            src={img || "/placeholder.svg"}
            alt={title}
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <ArrowRight className="h-5 w-5 text-red-600" />
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-base">
            {description}
          </p>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="text-sm font-medium text-red-600 group-hover:text-red-700">
              En savoir plus →
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;
