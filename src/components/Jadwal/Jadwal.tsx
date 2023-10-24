import { dataFakultas } from "@/Data/dataFakultas";
import { useState } from "react";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { dataProdi } from "@/Data/DataProdi";
import { TableHeaderData } from "@/Data/TableHeader";
import ScheduleTable from "../Table/Table";

const Jadwal = () => {
  const [fakultas, setFakultas] = useState<string>("");
  const [prodi, setProdi] = useState<string>("");

  const handleFakultasChange = (selectedFakultas: string) => {
    setFakultas(selectedFakultas);
    setProdi("");
  };
  const handleProdiChange = (selectedProdi: string) => {
    setProdi(selectedProdi);
  };

  return (
    <div>
      <h1 className="pt-7 text-xs text-[#003366] lg:text-lg">
        Jadwal kuliah baru
      </h1>
      <div className="mt-6 flex flex-col gap-3 pl-6 ">
        <div className="flex items-center ">
          <label
            className="text-xs text-[#003366] lg:text-sm"
            htmlFor="fakultas"
          >
            Fakultas
          </label>
          <Select value={fakultas} onValueChange={handleFakultasChange}>
            <SelectTrigger className="ml-14 w-32 lg:ml-[85px] lg:w-48">
              <SelectValue placeholder="Pilih Fakultas" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Pilih Fakultas" className="text-xs">
                  Pilih Fakultas
                </SelectItem>
                {dataFakultas.map((data) => (
                  <SelectItem key={data.id} value={data.nama}>
                    {data.nama}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center ">
          <label className="text-xs text-[#003366] lg:text-sm" htmlFor="prodi">
            Program Studi
          </label>
          <Select value={prodi} onValueChange={handleProdiChange}>
            <SelectTrigger className="ml-6 w-32 lg:ml-[47px] lg:w-48">
              <SelectValue placeholder="Pilih Prodi" />
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

        <ScheduleTable
          prodi={prodi}
          dataProdi={dataProdi}
          TableHeaderData={TableHeaderData}
        />
      </div>
    </div>
  );
};

export default Jadwal;
