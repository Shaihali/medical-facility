import { Doctor, Nurse } from "../types/types";

export const useFilteredList = (array: Doctor[] | Nurse[], value: string): Array<Doctor | Nurse> => {
  const filteredData = array.filter((item) => {
    if (value) {
      const searchValue = value.toUpperCase();
      const firstName = item.first_name.toUpperCase();
      const fullName = `${item.last_name} ${item.first_name} ${item.patronymic}`.toUpperCase();
      const lastName = item.last_name.toUpperCase();
      const middleName = item.patronymic.toUpperCase();
      const partName = `${item.first_name} ${item.patronymic}`;

      return (lastName.includes(searchValue) ||
        firstName.includes(searchValue) ||
        middleName.includes(searchValue)) ||
        fullName.includes(searchValue) ||
        partName.includes(searchValue);
    }
    return item;
  });
  return filteredData
}