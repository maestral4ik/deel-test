import React from 'react';

import './ResultList.css';
import { useAutocomplete } from '../../providers';
import { ResultListItem } from "../ResultListItem";

export const ResultList = () => {
  const { results } = useAutocomplete();

  return (
    <ul className="result_list">
      {results.map((value: string) => (
        <ResultListItem value={value} key={value} />
      ))}
    </ul>
  );
};
