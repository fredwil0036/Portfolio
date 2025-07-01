export default function Skills(){
    return(
        <div className="w-full mt-2 ">
            <div className="w-full border-2 border-slate-300">
            </div>
              <div className=' h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 ml-4'>
                <div className='relative flex flex-col my-6 bg- shadow-sm border border-slate-200 rounded-lg w-82'>
                {/* Header of the Cared */}
                <span className='mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1'>
                  Front End Development
                </span>

                <div className='p-4'>
                <ul className='list-disc list-inside'>
                    <li>
                        HTML
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        Css
                    </li>
                    <li>
                        Tailwind
                    </li>
                </ul>
                </div>

                </div>


                  <div className='relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-82'>
                {/* Header of the Cared */}
                <div className='mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1'>
                    Back End Development
                </div>

                  <div className='p-4'>
                <ul className='list-disc list-inside'>
                    <li>
                       PHP
                    </li>
                    <li>
                        JAVA
                    </li>
                    <li>
                        Basic Python
                    </li>
                    
                  
                </ul>
                </div>
                </div>


                <div className='relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-82'>
                {/* Header of the Cared */}
                <div className='mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1'>
                    Frameworks
                </div>
                <div className='p-4'>
                    <ul className='list-disc list-inside'>
                        <li>
                            ReactJS
                        </li>
                        <li>
                            Laravel
                        </li>
                        <li> 
                            Android Studio
                        </li>
                        <li>
                            Flutter
                        </li>
                    </ul>
                </div>
                </div>

                <div className='relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-82'>
                {/* Header of the Cared */}
                <div className='mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1'>
                    Database
                </div>
                <div className='p-4'>
                    <ul className='list-disc list-inside'>
                        <li>
                           MySQL
                        </li>
                        <li>
                            Firebase
                        </li>
                    
                    </ul>
                </div>
                </div>

            </div>
        </div>
    )
}