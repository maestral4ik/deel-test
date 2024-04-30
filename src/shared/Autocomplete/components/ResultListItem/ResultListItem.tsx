import React from 'react';

import { useAutocomplete } from '../../providers';

const getHighlightedText = (text: string, highlight: string) => {
  // Split on highlight term and include term into parts, ignore case
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

  return (
    <>
      {parts.map((part, i) => (
        <span
          key={i}
          style={
            part.toLowerCase() === highlight.toLowerCase()
              ? { fontWeight: 'bold' }
              : {}
          }
        >
          {part}
        </span>
      ))}
    </>
  );
};


interface Props {
  value: string;
}

export const ResultListItem = ({ value }: Props) => {
  const { search } = useAutocomplete();

  const highlightedText = getHighlightedText(value, search)

  return <li key={value}>{highlightedText}</li>;
};
