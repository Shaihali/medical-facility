import { useMemo } from "react";
import db from "../db/db.json";
import { useInputChangeValue } from "../hooks";
import { Doctor } from "../types";
import { Search, TableComponent } from "../components";

export const Doctors = () => {
  const doctors: Doctor[] = useMemo(() => db.doctors, []);

  const [value, handleChangeValue] = useInputChangeValue();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">Врачи нашего медучреждения</h1>
      <Search callback={handleChangeValue} />
      <TableComponent data={doctors} searchValue={value} />
    </div>
  );
};
