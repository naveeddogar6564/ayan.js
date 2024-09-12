import React from "react"
import Link from 'next/link'
const page = () => {
    return (
        <div className='flex gap-20 p-3 bg-green-500'>
            <Link href="\">Homepage</Link>
            <Link href="\Adress">Adress page</Link>
            <Link href="\Contact">Contact page</Link>
        </div>
    )
}

export default page