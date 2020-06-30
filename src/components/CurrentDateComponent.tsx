import React, {useEffect, useState} from "react";
import "antd/dist/antd.css";
import { Typography } from 'antd';
import moment from 'moment';

const { Text } = Typography;

const CurrentDateComponent: React.FC<{}> = () => {
    const [stat, setResult] = useState<String>(moment().format('LLLL'))

    useEffect(() => {
        const timer = setInterval(() => {
            setResult(moment().format('LLLL'))
        }, 1000);
        return () => clearInterval(timer)
    }, [])
    return <Text style={{color: "white"}}>{stat}</Text>;
};

export default CurrentDateComponent;