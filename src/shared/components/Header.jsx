import NavbarWeb from './NavbarWeb'
import NavbarMobile from './NavbarMobile'

export default function Header () {
  return (
    <>
      <header className='flex justify-between items-center bg-[#04588C] p-4'>
        <section className='flex gap-2 items-center'>
          <img src='/tree-icon.png' alt='Tree icon' className='w-12 h-12' />
          <h1 className='text-3xl'>Ananda</h1>
        </section>
        <NavbarWeb />
        <NavbarMobile />
      </header>
    </>
  )
}
