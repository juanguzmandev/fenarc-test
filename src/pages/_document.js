import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-black h-full m-0'>
        <Main />
        <NextScript />
        {/* Modals to be shown when user confirms the hiring order */}

        {/* First modal (Hiring success confirmation) */}
        <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
        <div className="modal font-mono font-bold z-50">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hiring information</h3>
            <p className="py-4">The bike has been hired</p>
            <div className="flex modal-action">
              <label htmlFor="confirmation-modal" className="btn font-mono bg-red-700 text-white">Close</label>
            </div>
          </div>
        </div>

        {/* Second modal (Hiring) */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal font-mono font-bold" id="first-modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hiring information</h3>
            <p className="py-4">Will you like to hire this bike for this price?</p>
            <div className="flex modal-action">
              <label htmlFor="my-modal" className="btn font-mono bg-red-700 text-white">Close</label>
              <label htmlFor="confirmation-modal" className="btn font-mono bg-green-700 text-white">
                Hire
              </label>
            </div>
          </div>
        </div>
      </body>
    </Html>
  )
}
