interface dropdownData{
  id: number,
  nama: string,
  prodi: string[]
}

const dataFakultas: dropdownData[] = [
  {
    id: 1,
    nama: 'Teknologi Industri',
    prodi: ['Informatika', 'Teknik Industri', 'Teknologi Pangan', 'Teknik Elektro', "Teknik Kimia"],
  },
  {
    id: 2,
    nama: 'Hukum',
    prodi: ['Ilmu Hukum'],
  },
  {
    id: 3,
    nama: 'Sastra',
    prodi: ['Satra Indonesia', 'Sastra Inggris', 'Ilmu Komunikasi'],
  },
];

export { dataFakultas };
