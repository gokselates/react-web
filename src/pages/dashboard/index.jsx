import React, { useEffect, useState } from "react";
import DataTable from "../../components/Table";
import { Button, Card, Space } from "antd";

export default function Dashboard() {
  const [data, setData] = useState([])

  useEffect(() => {
    getData();
  }, [])
  
  const getData = () => {
    setData([
      { key: "1", name: "Mike", age: 32, address: "10 Downing Street" },
      {
        key: "2",
        name: "John",
        age: 42,
        address: "10 Downing Street",
      },
    ])
  }

  const onAdd = () => {
    setData(prev=>[...prev,{
      key: "3",
      name: "Goksel",
      age: 42,
      address: "10 Downing Street",
    }])
  }

  const onDelete = () => {    
  }

  return (
    <Card
      title="Data Table"
      extra={
        <Space>
          <Button type="primary" onClick={onAdd}>Ekle</Button>
          <Button type="primary" onClick={onDelete}>Sil</Button>
        </Space>
      }
    >
      <DataTable
        data={data}
        columns={[
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "Age",
            dataIndex: "age",
            key: "age",
          },
          {
            title: "Address",
            dataIndex: "address",
            key: "address",
          },
        ]}
      ></DataTable>
    </Card>
  );
}
