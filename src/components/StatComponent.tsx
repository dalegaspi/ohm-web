import React from "react";
import OhmStatService from "../services/OhmStatService";
import {Statistic} from 'antd';
import "antd/dist/antd.dark.css";
import { Typography } from 'antd';

const { Text } = Typography;

type StatProps = {
    title: string,
    statIndex: string,
    subStat: string
}

const StatComponent: React.FC<StatProps> = ({title, statIndex, subStat}) => {
    const stat = OhmStatService(statIndex, subStat);
    const titleStyle = <Text style={{ color: "white"}}>{title}</Text>
    return <Statistic value={+stat} valueStyle={{ color: "white"}} title={titleStyle} suffix={" °C"}/>;
};

export default StatComponent;