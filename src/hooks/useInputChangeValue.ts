import { ChangeEvent, useCallback, useState } from 'react';

export const useInputChangeValue = (): [string, (event: ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState<string>('');

  const handleChangeValue = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  }, []);

  return [value, handleChangeValue];
};