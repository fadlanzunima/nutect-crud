import { Link } from "react-router-dom";
import data from "../data";
import { useState } from "react";
import { Table, Badge } from "react-bootstrap";

const TableList = () => {
  const [filteredInfo, setfilteredInfo] = useState(null);
  const [sortedInfo, setsortedInfo] = useState(null);
  const [dataList, setDataList] = useState([]);

  return (
    <>
      <div className="container mt-2">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama Barang</th>
              <th>Harag Beli</th>
              <th>Harga Jual</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.barang_name}</td>
                <td>{item.harga_beli}</td>
                <td>{item.harga_jual}</td>
                <td>{item.stok}</td>
                <td>
                  <Link to={"/edit/" + item.id}>Edit</Link>{" "}
                  <Badge bg="danger">Delete</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default TableList;
