import navbarImg from '../../asset/logo-uad-mogram-kecil.png';

const Navbar = () => {
  return (
    <>
      <nav className='flex items-center justify-between bg-[#003366] h-10 px-1 lg:p-5 text-white '>
        <img src={navbarImg} alt='navbar-img' className='w-20 lg:w-44' />
        <h1 className='pr-1 text-xs font-semibold lg:text-lg'>Sistem Informasi Manajemen Ruang</h1>
        <div className='flex gap-1 text-xs lg:gap-6 lg:text-base'>
          <a href='/'>Home</a>
          <a>Log Out</a>
        </div>
      </nav>
      <hr className='h-1 bg-yellow-400 border-0'></hr>
    </>
  );
};

export default Navbar;
