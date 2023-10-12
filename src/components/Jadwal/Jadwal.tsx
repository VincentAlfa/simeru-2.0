import { dataFakultas } from '@/Data/dataFakultas';
import { useState } from 'react';
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
} from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { dataProdi } from '@/Data/DataProdi';
import { TableHeaderData } from '@/Data/TableHeader';

const Jadwal = () => {
  const [fakultas, setFakultas] = useState<string>('');
  const [prodi, setProdi] = useState<string>('');

  const handleFakultasChange = (selectedFakultas: string) => {
    setFakultas(selectedFakultas);
    setProdi('');
  };
  const handleProdiChange = (selectedProdi: string) => {
    setProdi(selectedProdi);
  };

  return (
    <div>
      <h1 className='text-[#003366] pt-7 text-xs lg:text-lg'>Jadwal kuliah baru</h1>

      <div className='flex flex-col gap-3 mt-6 pl-6 '>
        <div className='flex items-center '>
          <label className='text-xs lg:text-sm text-[#003366]' htmlFor='fakultas'>
            Fakultas
          </label>
          <Select value={fakultas} onValueChange={handleFakultasChange}>
            <SelectTrigger className='ml-14 lg:ml-[85px] w-32 lg:w-48'>
              <SelectValue placeholder='Pilih Fakultas' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className='text-xs'>Fakultas</SelectLabel>
                {dataFakultas.map((data) => (
                  <SelectItem key={data.id} value={data.nama}>
                    {data.nama}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className='flex items-center '>
          <label className='text-xs lg:text-sm text-[#003366]' htmlFor='prodi'>
            Program Studi
          </label>
          <Select value={prodi} onValueChange={handleProdiChange}>
            <SelectTrigger className='ml-6 lg:ml-[47px] w-32 lg:w-48'>
              <SelectValue placeholder='Pilih Prodi' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {dataFakultas
                  .find((data) => data.nama === fakultas)
                  ?.prodi.map((data) => (
                    <SelectItem key={data} value={data}>
                      {data}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Table className='mt-4'>
          <TableHeader >
            <TableRow className='bg-[#003366]'>
              {TableHeaderData.header.map((data) => {
                return (
                  <TableHead className='text-white  w-[105px]' key={data}>
                    {data}
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataProdi
              .find((data) => data.prodi === prodi)
              ?.detail.map((data) => {
                return (
                  <TableRow>
                    <TableCell>{data.hari}</TableCell>
                    <TableCell>{data.kode}</TableCell>
                    <TableCell>{data.matkul}</TableCell>
                    <TableCell>{data.kelas}</TableCell>
                    <TableCell>{data.sks}</TableCell>
                    <TableCell>{data.jam}</TableCell>
                    <TableCell>{data.semester}</TableCell>
                    <TableCell>{data.dosen}</TableCell>
                    <TableCell>{data.ruang}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Jadwal;
