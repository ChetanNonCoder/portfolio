export default function Card() {
    return (
      <div className="mx-auto max-w-sm p-4 md:p-6 ">
        <div className="rounded-2xl bg-white p-6 shadow-lg border border-slate-300">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-black">DATA SCIENTIST</h2>
              <p className="text-sm text-black">iSprout GreyStone, Baner, Pune 411045</p>
            </div>
            
            <p className="text-sm leading-relaxed text-">
              We&apos;re looking for a skilled Data Scientist to help us create innovative solutions for our clients. You&apos;ll be tasked with analyzing large, complex data sets and generating insights that fuel business growth.
            </p>
  
            <div className="flex gap-3 pt-4">
              <button className="flex items-center justify-center gap-2 rounded-lg bg-[#EC8305] rounded-xl  px-4 py-2.5 text-sm text-white transition-colors hover:from-[#3d3e47] hover:to-[#3d3e47]">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Mail Application
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg bg-[#EC8305] rounded-xl  px-4 py-2.5 text-sm text-white transition-colors hover:from-[#3d3e47] hover:to-[#3d3e47]">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  