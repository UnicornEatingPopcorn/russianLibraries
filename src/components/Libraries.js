import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Descriptions } from "antd";

const Libraries = (props) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    setInfo(props.location.state.regionInfo);
  }, [props]);

  return (
    <Descriptions
      title={`Информация по библиотекам региона ${info.territory}`}
      key={props.match.params.id}
      bordered
    >
      <Descriptions.Item label="Адрес">{info.address}</Descriptions.Item>
      <Descriptions.Item label="Официальное название" span={2}>
        {info.formname}
      </Descriptions.Item>
      <Descriptions.Item label="Полное наименование">
        {info.fullname}
      </Descriptions.Item>
      <Descriptions.Item label="Количество библиотек">
        {info.libraries}
      </Descriptions.Item>
      <Descriptions.Item label="Статистические данные за">
        {info.period}
      </Descriptions.Item>
      <Descriptions.Item label="Количество работников">
        {info.employees}
      </Descriptions.Item>
      <Descriptions.Item label="Количество высококвалифицированных сотрудников">
        {info.staff_higheeducated}
      </Descriptions.Item>
      <Descriptions.Item label="Количество посетителей">
        {info.users}
      </Descriptions.Item>
    </Descriptions>
  );
};

export default withRouter(Libraries);
