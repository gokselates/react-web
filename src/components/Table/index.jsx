import React from "react";
import { Table } from "antd";

const DataTable = (props) => {
  const { data, columns } = props;
  console.log(props);

  return <Table columns={columns} dataSource={data} />;
};
export default DataTable;
