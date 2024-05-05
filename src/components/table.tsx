import { FC } from "react";
import { Doctor, Nurse } from "../types/types";
import { useFilteredList } from "../hooks/useFilteredList";

type TableComponentProps = {
  data: Doctor[] | Nurse[];
  searchValue: string;
};
export const TableComponent: FC<TableComponentProps> = ({
  data,
  searchValue,
}) => {
  const employesList = useFilteredList(data, searchValue);

  return (
    <table className=" sm:min-w-96 lg:min-w-full md:min-w-min bg-white border border-gray-300 rounded-xl border-separate">
      <thead>
        <tr className="bg-indigo-500">
          <th className="py-2 px-4 border-b text-left rounded-tl-xl">
            Фамилие
          </th>
          <th className="py-2 px-4 border-b text-left">Имя</th>
          <th className="py-2 px-4 border-b text-left">Отчество</th>
          <th className="py-2 px-4 border-b text-left">Врач-специалист</th>
          <th className="py-2 px-4 border-b text-left rounded-tr-xl">
            Отделение
          </th>
        </tr>
      </thead>
      <tbody>
        {employesList.map((doctor, index) => (
          <tr key={doctor.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
            <td className="py-2 px-4 border-b rounded-xl">
              {doctor.last_name}
            </td>
            <td className="py-2 px-4 border-b  rounded-xl">
              {doctor.first_name}
            </td>
            <td className="py-2 px-4 border-b  rounded-xl">
              {doctor.patronymic}
            </td>
            <td className="py-2 px-4 border-b  rounded-xl">
              {doctor.job_title}
            </td>
            <td className="py-2 px-4 border-b  rounded-xl">
              {doctor.department}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
