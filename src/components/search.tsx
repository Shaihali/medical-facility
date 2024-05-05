import { ChangeEvent, FC, memo } from "react";

type SearchProps = {
  callback: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const Search: FC<SearchProps> = memo(({ callback }) => {
  return (
    <div className="flex justify-between w-80 gap-3">
      <form className="flex-1">
        <input
          placeholder="ФИО"
          type="search"
          className="w-full"
          onChange={callback}
        />
        <div id="search-spinner" aria-hidden hidden={true} />
        <div className="sr-only" aria-live="polite"></div>
      </form>
      <button type="submit">Поиск</button>
    </div>
  );
});
