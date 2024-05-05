import { useMemo } from "react";
import db from "../db/db.json";
import { useInputChangeValue } from "../hooks";
import { Nurse } from "../types";
import { Search, TableComponent } from "../components";

export const Nurses = () => {
  const nurses: Nurse[] = useMemo(() => db.nurses, []);

  const [value, handleChangeValue] = useInputChangeValue();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">Медсестра нашего медучреждения</h1>
      <Search callback={handleChangeValue} />
      <TableComponent data={nurses} searchValue={value} />
    </div>
  );
};
