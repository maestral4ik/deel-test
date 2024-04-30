import React, { ChangeEvent, useCallback, useEffect } from 'react';

import { useAutocomplete } from '../../providers';
import { GetPersonsResponseInterface } from '../../interfaces';
import { useDebounce } from '../../../../helpers';

export const Input = () => {
  const { search, setSearch, setResults, setLoading } = useAutocomplete();

  const loadData = async (value: string, signal: AbortSignal) => {
    try {
      const response: Response = await fetch(
        `https://swapi.dev/api/people?search=${value}`,
        { signal }
      );
      const res: GetPersonsResponseInterface = await response.json();

      setLoading(false);

      setResults(res.results.map(({ name }) => name));
    } catch (e) {
      console.error(e);
    }
  };

  const loadDataDebounced = useDebounce(loadData, 400);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    if (search === '') {
      setResults([]);
      setLoading(false);

      return;
    }

    setLoading(true);

    loadDataDebounced(search, signal);

    return () => {
      controller.abort();
    };
  }, [search, setLoading, setResults]);

  const handleInputChanged = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setSearch(value);
    },
    [setSearch]
  );

  return (
    <input
      className="autocomplete__input"
      onChange={handleInputChanged}
      autoFocus
      value={search}
      placeholder="Please enter something"
    />
  );
};
