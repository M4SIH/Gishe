import React, { useContext } from "react";
import { useTable, useSortBy } from "react-table/dist/react-table.development";
import MovieForm from "../components/Movies/MovieForm";
import CartContext from "../store/cart-context";
import Button from "./Button";
import "./Table.css";

export default function Table({ columns, data }) {
  const cartCxt = useContext(CartContext);

  const addToCartHandler = (amount, data) => {
    cartCxt.addItem({
      id: data.id,
      title: data.title,
      amount: amount,
      price: data.price,
    });
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        initialState: {
          hiddenColumns: ["src", "summary", "id", "price"],
        },
      },
      useSortBy
    );
  const firstPageRows = rows.slice(0, 20);
  return (
    <>
      <table
        className="table table-dark table-striped w-75 mx-auto mt-5"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                <td className="buttonsColumn" key={row.values.id}>
                  <div className="tableButtons">
                    <MovieForm
                      id={row.values.id}
                      onAddToCart={addToCartHandler}
                      onRecieveData={row.values}
                    />
                    <Button
                      text="More Info"
                      url="movie"
                      data={row.values}
                      params={row.values.id}
                      buttonClass="carouselButton"
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div>Showing the first 20 results of {rows.length} rows</div>
    </>
  );
}
