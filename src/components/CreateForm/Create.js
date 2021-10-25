import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import data from "../data";
import { useHistory } from "react-router-dom";

const Create = () => {
  let history = useHistory();

  const [name, setName] = useState("");
  const [priceBuy, setpriceBuy] = useState("");
  const [pricePay, setpricePay] = useState("");
  const [stock, setstock] = useState("");
  const [id, setId] = useState(4);

  const pushData = () => {
    setId(id + 1)
    const data_create = {
      id: id,
      barang_name: name,
      harga_beli: priceBuy,
      harga_jual: pricePay,
      stok: stock,
    };
    data.push(data_create);
    console.log(data)
    history.push("/");
  };
  return (
    <>
      <div className="container mt-2">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nama Barang</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tulis Nama Barang"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Harga Beli</Form.Label>
          <Form.Control
            type="number"
            placeholder="Tulis Harga Beli"
            onChange={(e) => setpriceBuy(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Harga Jual</Form.Label>
          <Form.Control
            type="number"
            placeholder="Tulis Harga Jual"
            onChange={(e) => setpricePay(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Stok</Form.Label>
          <Form.Control
            type="number"
            placeholder="Tulis Stok"
            onChange={(e) => setstock(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={pushData}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default Create;
