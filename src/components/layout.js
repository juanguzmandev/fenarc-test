
export default function Layout({children}) {
    return (
        <>
            <header className='w-full p-12 flex justify-center'>
                <h1 className='font-mono text-xl font-bold'>Bikes</h1>
            </header>
            {children}
        </>
    )
}