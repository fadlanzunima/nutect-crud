import { Link } from "react-router-dom";
import { Table, Button, Space, Popconfirm } from "antd";
import data from "../data";
import { useState } from "react";

const TableList = () => {
  const [filteredInfo, setfilteredInfo] = useState(null);
  const [sortedInfo, setsortedInfo] = useState(null);
  const [dataList, setDataList] = useState(data);
  // setDataList(data);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setfilteredInfo(filters);
    setsortedInfo(sorter);
  };

  const clearFilters = () => {
    setfilteredInfo(null);
  };

  const clearAll = () => {
    setfilteredInfo(null);
    setsortedInfo(null);
  };

  const setAgeSort = () => {
    setsortedInfo({
      order: "descend",
      columnKey: "age",
    });
  };

  const handleDelete = (id) => {
    const dataSource = [...data];
    dataSource.pop();
    setDataList({ dataSource: dataSource });
  };

  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      // sorter: (a, b) => a.age - b.age,
      // sortOrder: sortedInfo.columnKey === "age" && sortedInfo.order,
      // ellipsis: true,
    },
    {
      title: "Nama Barang",
      dataIndex: "barang_name",
      key: "barang_name",
      // filters: [
      //   { text: "Joe", value: "Joe" },
      //   { text: "Jim", value: "Jim" },
      // ],
      // filteredValue: filteredInfo.name || null,
      // onFilter: (value, record) => record.name.includes(value),
      // sorter: (a, b) => a.name.length - b.name.length,
      // sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
      // ellipsis: true,
    },
    {
      title: "Harga Beli",
      dataIndex: "harga_beli",
      key: "harga_beli",
      // sorter: (a, b) => a.age - b.age,
      // sortOrder: sortedInfo.columnKey === "age" && sortedInfo.order,
      // ellipsis: true,
    },
    {
      title: "Harga Jual",
      dataIndex: "harga_jual",
      key: "harga_jual",
      // sorter: (a, b) => a.age - b.age,
      // sortOrder: sortedInfo.columnKey === "age" && sortedInfo.order,
      // ellipsis: true,
    },
    {
      title: "Stok",
      dataIndex: "stok",
      key: "stok",
      // sorter: (a, b) => a.age - b.age,
      // sortOrder: sortedInfo.columnKey === "age" && sortedInfo.order,
      // ellipsis: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => (
        <Space size="middle">
          {data.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record.id)}
            >
              <a>Delete</a>
            </Popconfirm>
          ) : null}
          <Link to={`/edit/${record.id}`} className="nav-link">
            Edit
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="container mt-2">
        <Space style={{ marginBottom: 16 }}>
          <Button onClick={setAgeSort}>Sort age</Button>
          <Button onClick={clearFilters}>Clear filters</Button>
          <Button onClick={clearAll}>Clear filters and sorters</Button>
        </Space>
        <Table columns={columns} dataSource={data} onChange={handleChange} />
      </div>
    </>
  );
};

export default TableList;
