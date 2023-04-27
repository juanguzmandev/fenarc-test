import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import BikesList from '../components/bikeslist'
import BikeCard from '../components/bikecard'
import { bikes } from '../data/bikes'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <BikesList>
        <main className='flex justify-center flex-wrap font-mono font-bold p-8'>
          {bikes.map(bike => {
            return (
              <BikeCard key={bike.slug}>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-900 dark:border-gray-700 m-5">
                  <a href="#">
                    <img className="rounded-t-lg bg-cover bg-center h-64 w-full" src={bike.img} alt={bike.slug} />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{bike.name}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{bike.description}</p>
                    {(bike.type == 'e' && <p className='text-yellow-400 my-8'>Electric</p>) || (bike.type == 'r' && <p className='text-green-400 my-8'>Regular</p>) || (bike.type == 'o' && <p className='text-blue-700 my-8'>Antique</p>)}
                    <Link href={"/renting/" + bike.slug} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Hire
                      <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                  </div>
                </div>
              </BikeCard>
            )
          })}
        </main>
      </BikesList>
  )
}
