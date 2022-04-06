import React from "react";
import { getMovies } from "../../services/FakeMovieService";
import { useMemo } from "react";
import Table from "../../shared/Table";
import Button from "../../shared/Button";

export default function MoviesTable() {
  const movies = getMovies();
  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title", // accessor is the "key" in the data
      },
      {
        Header: "Genre",
        accessor: "genre",
      },
      {
        Header: "Rate",
        accessor: "rate",
      },
      {
        id: "edit",
        accessor: "id",
        Cell: ({ value }) => (
          <Button
            text="Buy Ticket"
            url="movie"
            id={value}
            buttonId="MovieTableButton"
          />
        ),
      },
    ],
    []
  );
  return <Table data={movies} columns={columns} />;
}
