import React from 'react'

const Bannar = () => {
  return (
    <section className="bg-purple-200 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-6">
              <div className="md:w-1/2 text-center">
                <h1 className="text-4xl font-bold mb-4">Download Booktime</h1>
                <p className="text-lg text-gray-700 mb-6">Let your children discover the joy of reading and unleash their imagination in a world of exciting stories and enjoyable books in different languages on topics that suit their interests and ages.</p>
              </div>
        </div>
        <div className="text-lg text-gray-700 mb-6">
            <img src="/dragon.png" alt="" className="max-w-xs md:max-w-md ml-106" />
       </div>
    </section>
  )
}

export default Bannar