import React from 'react'
import "./Table.scss";

const Table: React.FC<any> = ({ data }) => {
    return <table>
        <thead>
            <tr>
                {
                    Object.keys(data[0]).map((el, i) => <th key={`heading-${i + 1}`}>{el}</th>)
                }
            </tr>
        </thead>
        <tbody>
            {
                data.map(
                    (row: any, index: number) =>
                        <tr key={`row-${index}`}>
                            {
                                Object.keys(row).map(
                                    (el: any, i: number) => <td
                                        key={`row-${index}-el-${i}`}>
                                        {row[el]}
                                    </td>
                                )
                            }
                        </tr>
                )
            }
        </tbody>
    </table>;
}

export default Table;