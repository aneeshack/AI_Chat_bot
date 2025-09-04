// import Link from 'next/link'

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-100 via-white to-pink-100 p-6">
//       <div className="bg-white shadow-2xl rounded-3xl p-12 max-w-lg w-full text-center">
//         <h1 className="md:text-5xl text:5xl font-extrabold text-gray-800 mb-10">
//           School Management System
//         </h1>
//         <div className="flex flex-col gap-6">
//           <Link
//             href="/addSchool"
//             className="transform hover:scale-105 transition duration-300 bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-600"
//           >
//             Add New School
//           </Link>
//           <Link
//             href="/showSchools"
//             className="transform hover:scale-105 transition duration-300 bg-green-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-600"
//           >
//             View All Schools
//           </Link>
//         </div>
//       </div>
//       <p className="mt-8 text-gray-500 text-sm">
//         Manage all your schools efficiently and effortlessly
//       </p>
//     </div>
//   )
// }



import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-100 via-white to-pink-100 p-4 sm:p-6 md:p-8">
      <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-8 md:p-12 max-w-xs sm:max-w-md md:max-w-lg w-full text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 sm:mb-8 md:mb-10">
          School Management System
        </h1>
        <div className="flex flex-col gap-4 sm:gap-6">
          <Link
            href="/addSchool"
            className="transform hover:scale-105 transition duration-300 bg-blue-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg hover:bg-blue-600 text-sm sm:text-base"
          >
            Add New School
          </Link>
          <Link
            href="/showSchools"
            className="transform hover:scale-105 transition duration-300 bg-green-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg hover:bg-green-600 text-sm sm:text-base"
          >
            View All Schools
          </Link>
        </div>
      </div>
      <p className="mt-6 sm:mt-8 text-gray-500 text-xs sm:text-sm md:text-base">
        Manage all your schools efficiently and effortlessly
      </p>
    </div>
  )
}