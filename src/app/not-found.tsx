import Link from 'next/link'
import Image from 'next/image';

import img from './assets/icons/notfound.svg'
import { Button } from '@/components/ui/button'
export default function NotFound() {
    return (
        <section className='h-screen grid place-content-center'>
            <div className='grid place-content-center max-w-md'>
                <div className='text-center py-8'>
                    <h2 className='text-3xl font-poppins font-semibold mb-5'>Not Found</h2>
                    <p className='text-xl font-krub'>Could not find requested resource</p>
                </div>
                <Image src={img} alt='img' height={600} width={450} className='my-8 w-auto' />
                <Button className="text-xl outline outline-2 outline-primary rounded-sm bg-primary hover:bg-background text-background hover:text-primary p-2 w-52 m-auto mt-20"><Link href="/">Return Home</Link></Button>
            </div>
        </section>
    )
}