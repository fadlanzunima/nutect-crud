import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import data from "../data";
import { useHistory, useParams } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [priceBuy, setpriceBuy] = useState("");
  const [pricePay, setpricePay] = useState("");
  const [stock, setstock] = useState("");

  let { topicId } = useParams();
  let history = useHistory();
  // console.log(topicId);
  //   const { id } = this.props.match.params;

  //   data.map((item) => {
  //     if (item.id === id) {
  //       setName(item.name);
  //       setpriceBuy(item.harga_beli);
  //       setpricePay(item.harga_jual);
  //       setstock(item.stok);
  //     }
  //   });

  const pushData = () => {
    // const data_create = {
    //   barang_name: name,
    //   harga_beli: priceBuy,
    //   harga_jual: pricePay,
    //   stok: stock,
    // };
    // data.map((item, index) => {
    //   if (item.id === id) {
    //     console.log(item.id, id);
    //     data.push(data_create);
    //   }
    // });
    // console.log(data);
    // history.push("/");
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

export default Edit;
