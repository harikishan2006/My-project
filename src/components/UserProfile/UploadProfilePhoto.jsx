import React from 'react'

const UploadProfilePhoto = () => {
  return (
    <section className='w-[100%] h-[calc(100vh-70px)] flex flex-col justify-center items-center'>
        <article className='w-[35%] bg-gray-900 flex flex-col justify-center items-center rounded-md'>
            <header className='w-full '>
                <h1 className='text-3xl text-center font-bold uppercase py-6 px-4'> Upload Profile Photo</h1>
            </header>
            <div className='w-[150px] h-[150px] border rounded-full flex justify-center items-center bg-gray-500 '> No File Selected
            </div>
        </article>
        <main className='w-[35%] bg-gray-900'>
            <form>
            <div className='flex flex-col justify-center my-3 px-6 '>
                <label htmlFor='profile' className='font-semibold text-lg py-2' >Upload your Profile photo here</label>
                <input type='file' name='' id='profile' className='border py-2 px-4 border-gray-500 border-dotted cursor-pointer file:bg-white file:text-black file:p-1 file:rounded file:cursor-pointer' />
            </div>
            <div className='flex justify-center items-center mt-3 mb-5 '>
                <button className='px-6 py-2 bg-gray-400 hover:bg-gray-700 cursor-pointer font-semibold rounded-lg'>
                    Upload Profile
                </button>
            </div>
            </form>
            </main>
    </section>
  )
}

export default UploadProfilePhoto