import React, { useState, useEffect } from "react";
import { Table } from "antd";

const FullStatisticList = (props) => {
  const [statistics, setStatistics] = useState();

  useEffect(() => {
    setStatistics(props.location.state.fullInfo);
  }, [props]);

  const columns = [
    {
      title: "Название библиотеки",
      dataIndex: "fullname",
    },
    {
      title: "Количество библиотек по региону",
      dataIndex: "libraries",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.libraries - b.libraries,
    },
  ];

  return <Table columns={columns} dataSource={statistics} />;
};

export default FullStatisticList;
