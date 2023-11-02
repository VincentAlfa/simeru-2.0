import { Separator } from "@/components/ui/separator";

const Aside = () => {
  return (
    <div className="ml-2 flex h-screen flex-col items-start pt-7 lg:ml-12 lg:w-72 lg:pl-4">
      <h1 className="text-xs font-semibold text-[#003366] lg:text-lg">
        Mahasiswa
      </h1>
      <h1 className="pt-7 text-xs font-semibold text-[#003366] lg:text-lg">
        Menu Utama
      </h1>
      <h1 className="my-2 text-xs lg:text-lg">Jadwal Kuliah Baru</h1>
      <div className="flex flex-col pl-4 text-[10px] lg:text-sm">
        <h1>Jadwal Program Studi</h1>
        <Separator className="my-1 bg-gray-600 w-44" />
        <h1>Jadwal Dosen</h1>
        <Separator className="my-1 bg-gray-600" />
        <h1>Jadwal Ruang</h1>
        <Separator className="my-1 bg-gray-600" />
      </div>
    </div>
  );
};

export default Aside;
