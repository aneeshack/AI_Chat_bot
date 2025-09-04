export const dynamic = "force-dynamic";


import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'
import path from 'path'
import { writeFile } from 'fs/promises'

export async function POST(request) {
  try {
    console.log('inside post')
    const formData = await request.formData()
    const file = formData.get('image')
    
    const imagePath = file ? `school_${Date.now()}_${file.name}` : ''
    
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer())
      const uploadPath = path.join(process.cwd(), 'public', 'schoolImages', imagePath)
      await writeFile(uploadPath, buffer)
    }

    const school = await prisma.school.create({
      data: {
        name: formData.get('name'),
        address: formData.get('address'),
        city: formData.get('city'),
        state: formData.get('state'),
        contact: formData.get('contact'),
        email_id: formData.get('email_id'),
        image: imagePath,
      },
    })

    return NextResponse.json(school, { status: 201 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Failed to add school' }, { status: 500 })
  }
}

export async function GET() {
  console.log('inside get')
  try {
    const schools = await prisma.school.findMany()
    return NextResponse.json(schools)
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Failed to fetch schools' }, { status: 500 })
  }
}