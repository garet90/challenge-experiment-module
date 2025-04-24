
export const NoWalletModal = ({dismiss}) => {
  return <div className="fixed top-0 left-0 right-0 bottom-0 justify-center items-center bg-black bg-opacity-50 z-[99999]" onClick={dismiss}>
    <div className="rounded-lg p-6 mx-2 my-20 lg:mx-auto lg:w-max shadow-sm sm:border backdrop-blur-md border-white/10" onClick={(e) => {
      e.stopPropagation()
    }}>
      <div className="font-semibold text-gray-50 text-center">
        No Wallet Found!
      </div>

      <div className="text-gray-300 text-center">
        Please install MetaMask to continue
      </div>

      <div className="flex items-center justify-between mt-8">
        <button
          className="py-2 px-4 bg-white/10 hover:bg-white/10 border border-white/10 text-white font-medium text-sm rounded-full shadow-md focus:outline-none focus:bg-white/10"
          onClick={dismiss}
        >Dismiss</button>
        <button
          className="py-2 px-4 bg-lime-500 border border-lime-50/10 text-white font-medium text-sm rounded-full hover:bg-lime-600 transition-colors duration-300"
          onClick={() => {
            window.open("https://metamask.io/download", "_blank")
          }}
        >Install Metamask</button>
      </div>
    </div>
  </div>
}
