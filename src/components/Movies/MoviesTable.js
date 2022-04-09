import React from "react";
import { getMovies } from "../../services/FakeMovieService";
import { useMemo } from "react";
import Table from "../../shared/Table";

export default function MoviesTable() {
  const movies = getMovies();
  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "id",
      },
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
        Header: "",
        accessor: "src",
      },
      {
        Header: "",
        accessor: "summary",
      },

      {
        Header: "",
        accessor: "price",
      },
    ],
    []
  );

  return <Table data={movies} columns={columns} />;
}
