import React from 'react';
import { useAutocomplete } from "../../providers";
import { ResultList } from "../ResultList";

export const Result = () => {
  const { loading, search, results } = useAutocomplete();

  if (loading) {
    return <p>Loading...</p>
  }

  if (!loading && !results.length && search) {
    return <p>No results</p>
  }

  return <ResultList/>;
};
