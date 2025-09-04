import SchoolCard from '../../components/SchoolCard'

async function getSchools() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/schools`, {
    cache: 'no-store',
  })
  return res.json()
}

export default async function ShowSchools() {
  const schools = await getSchools()

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-white to-pink-100 py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-blue-700">
        All Schools
      </h1>

      {schools.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No schools found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {schools.map((school) => (
            <div
              key={school.id}
              className="transform hover:scale-105 transition duration-300"
            >
              <SchoolCard school={school} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
