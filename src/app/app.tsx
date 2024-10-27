function App() {
  return (
    <>
      <header>
        <nav>{/* Navigation content */}</nav>
      </header>
      <main>
        <div className='flex flex-col items-center pt-10'>
          <h1 className='mb-8 text-6xl font-extrabold leading-none tracking-tight text-purple-400 sm:mb-10 lg:text-7xl'>
            AppName
          </h1>
          <p className='mb-10 max-w-screen-lg text-lg font-medium text-gray-300 sm:mb-11 sm:text-xl'>
            AppDescription
          </p>

          <section className='mx-auto grid max-w-screen-lg grid-cols-10 gap-4 xl:max-w-screen-xl'>
            <button className='col-span-5 w-full rounded-lg bg-purple-400 px-6 py-4 font-bold text-white hover:bg-purple-500 sm:w-auto'>
              Get Started
            </button>
          </section>
        </div>
      </main>
      <footer className='mx-auto max-w-screen-lg pb-16 text-center font-bold text-gray-400 sm:text-right xl:max-w-screen-xl'></footer>
    </>
  );
}
// test comment for lint
export default App;
