import { useState, useEffect } from "react";
import { fetchMailData } from "src/lib/function";

export interface mail {
    id: string;
    name: string;
    mail: string;
    contents: string;
    createAt: string;
  }
  

export const TableMail = () => {
  const initData: mail[] = [];
  const [mailData, setMailData] = useState(initData);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchMailData();
      setMailData(result);
    };
    fetchData();
  }, []);
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>No</th>
          <th>投稿日時</th>
          <th>名前</th>
          <th>メールアドレス</th>
          <th>内容</th>
          <th>FirestoreID</th>
        </tr>
      </thead>
      <tbody>
        {mailData.map((mail, index) => {
          return (
            <tr key={index + 1}>
              <td className="text-center">{index + 1}</td>
              <td>{mail.createAt}</td>
              <td>{mail.name}</td>
              <td>{mail.mail}</td>
              <td>{mail.contents}</td>
              <td>{mail.id}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
