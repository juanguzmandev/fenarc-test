import { useRouter } from 'next/router'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import HireForm from '../../components/hireform'
//import BikeCard from '../../components/bikecard'
const BikeCard = dynamic(
    () => import('../../components/bikecard'),
    { ssr: false }
)
import { bikes } from '../../data/bikes'
import { useEffect } from 'react'

export default function Renting() {

    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => console.log(localStorage.getItem('total_price')));

    const bikeData = slug && bikes.find(bike => bike && (bike.slug == slug));

    return (
        <>
        <main className="flex lg:flex-wrap flex-col items-center lg:flex-row font-mono font-bold px-8 h-full lg:h-screen">
            <aside className='flex justify-center mb-10 lg:mb-0 lg:w-3/6 w-8/12 lg:px-8 h-full'>
                <BikeCard>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-900 dark:border-gray-700 m-5 pb-3">
                    <a href="#">
                        <img className="rounded-t-lg bg-cover max-h-48 w-full" src={slug && bikeData.img} alt={slug && bikeData.slug} />
                    </a>
                    <div className="p-5">
                        <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{slug && bikeData.name}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        {slug && ((bikeData.type == 'e' && <p className='text-yellow-400 my-6'>Electric</p>) || (bikeData.type == 'o' && <p className='text-blue-700 my-6'>Antique</p>) || (bikeData.type == 'r' && <p className='text-green-400 my-6'>Regular</p>))}
                        <h1 className='text-2xl my-5' id="total_price">10$</h1>
                        <Link href="/" className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Change bike
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>
                    </div>
                </BikeCard>
            </aside>
            <section className='my-8 lg:w-6/12 w-8/12 px-8 pb-8'>
                <HireForm bikeSlug={slug} />
            </section>
        </main>
        <footer className='font-mono w-full flex justify-center py-8 bg-black'>
            <Link href="/">
                Volver
            </Link>
        </footer>
        </>
    );
}