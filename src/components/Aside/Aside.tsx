const Aside = () => {
  return (
    <div className='flex flex-col items-start h-screen lg:pl-4 ml-2 lg:ml-12 lg:w-72 pt-7'>
      <h1 className='text-[#003366] font-semibold text-xs lg:text-lg'>Mahasiswa</h1>
      <h1 className='text-[#003366] font-semibold text-xs lg:text-lg pt-6'>Menu Utama</h1>
      <h1 className='my-3 text-xs lg:text-lg'>Jadwal Kuliah Baru</h1>
      <div className='flex flex-col pl-4 text-[10px] lg:text-sm'>
        <h1>Jadwal Program Studi</h1>
        <h1>Jadwal Dosen</h1>
        <h1>Jadwal Ruang</h1>
      </div>
    </div>
  );
};

export default Aside;
