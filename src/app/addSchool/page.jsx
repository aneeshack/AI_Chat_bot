'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
// import { useRouter } from 'next/router'
import { useRouter } from "next/navigation"

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  contact: z.string().regex(/^\d{10}$/, 'Contact must be a 10-digit number'),
  email_id: z.string().email('Invalid email address'),
  image: z.any().refine((file) => file?.length === 1, 'Image is required'),
})

export default function AddSchool() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'image') {
        formData.append(key, value[0])
      } else {
        formData.append(key, value)
      }
    })

    try {
      const response = await fetch('/api/schools', {
        method: 'POST',
        body: formData,
      })
      if (response.ok) {
        router.push('/showSchools')
        alert('School added successfully!')
      } else {
        alert('Failed to add school')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred', error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-white to-pink-100 p-6">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Add New School</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          {/** Single Field Template **/}
          {[
            { label: "School Name", name: "name", type: "text" },
            { label: "Address", name: "address", type: "text" },
            { label: "City", name: "city", type: "text" },
            { label: "State", name: "state", type: "text" },
            { label: "Contact Number", name: "contact", type: "tel" },
            { label: "Email", name: "email_id", type: "email" },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label className="block text-gray-700 font-medium mb-1">{label}</label>
              <input
                {...register(name)}
                type={type}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition`}
              />
              {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>}
            </div>
          ))}

          {/** Image Upload **/}
          <div>
            <label className="block text-gray-700 font-medium mb-1">School Image</label>
            <input
              {...register('image')}
              type="file"
              accept="image/*"
              className="w-full text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition"
            />
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
          </div>

          {/** Submit Button **/}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 hover:shadow-lg transition"
          >
            Add School
          </button>

        </form>
      </div>
    </div>
  )
}
