export default function SchoolCard({ school }) {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 bg-white">
      
      {/* School Image */}
      <div className="relative h-48">
        <img
          src={`/schoolImages/${school.image}`}
          alt={school.name}
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* School Info */}
      <div className="p-4">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
          {school.name}
        </h2>
        <p className="text-gray-600 text-sm md:text-base">{school.address}</p>
        <p className="text-gray-600 text-sm md:text-base">{school.city}</p>
      </div>
    </div>
  )
}
