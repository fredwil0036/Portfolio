export default function Footer(){

   const currentYear = new Date().getFullYear();
    return(
         <footer className="relative w-full bg-white">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <p className="mb-4 text-center text-sm text-blue-gray-900 md:mb-0">
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/" className="underline hover:text-blue-600">
              Material Tailwind
            </a>. All Rights Reserved.
          </p>

          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            {[
              "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
              "M12.315 2c2.43 0 2.784.013 3.808.06...",
              "M8.29 20.251c7.547 0 11.675-6.253 11.675...",
              "M12 2C6.477 2 2 6.484 2 12.017c0 4.425..."
            ].map((d, index) => (
              <a key={index} href="#" className="opacity-80 transition-opacity hover:opacity-100">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d={d} clipRule="evenodd" fillRule="evenodd" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
    )
}