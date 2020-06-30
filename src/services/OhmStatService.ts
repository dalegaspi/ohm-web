import {useEffect, useState} from 'react';

let baseUrl = 'http://localhost:3000'

function getStat(payload: Object, itemIndex: string, statName: string, subStatName: string): string {
    try {
        // https://stackoverflow.com/a/35209016/918858 -- TypeScript hatred intensifies
        const statRoot = (payload as any)['Children'][0]['Children'];
        const idxItemStat = Array.from(statRoot)
            .find((idx: any) =>
                idx['id'].toString() === itemIndex);
        const stat = Array.from((idxItemStat as any)['Children'])
            .find((stat: any) => stat['Text'] === statName);
        const subStat = Array.from((stat as any)['Children'])
            .find((subStat: any) => subStat['Text'] === subStatName);

        const value = (subStat as any)['Value'];
        const numberValue = value.toString().split(' ')[0];

        return numberValue
    } catch (e) {
        return '0'
    }
}

const OhmStatService = (itemIndex: string, subStatName: string) => {
    const [stat, setResult] = useState<String>('0')

    useEffect(() => {
        const timer = setInterval(() => {
            fetch(baseUrl + '/data.json')
                .then(response => response.json() as Object)
                .then(response => setResult(getStat(response, itemIndex, 'Temperatures', subStatName)))
                .catch(() => setResult('-'));
        }, 3000);
        return () => clearInterval(timer)
    }, [])

    return stat;
}

export default OhmStatService;