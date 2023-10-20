import { TableData } from '@/Data/DataProdi';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

interface tableProps {
  dataProdi: TableData[];
  prodi: string;
  TableHeaderData: {
    header: string[];
  };
}

const ScheduleTable: React.FC<tableProps> = ({ dataProdi, prodi, TableHeaderData }) => {
  return (
    <Table className='mt-4'>
      <TableHeader>
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
  );
};

export default ScheduleTable;
