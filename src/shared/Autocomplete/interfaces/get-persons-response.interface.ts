import { Person } from "./person.interface";

export interface GetPersonsResponseInterface {
  count: number;
  next: string;
  previous: string;
  results: Person[]
}
