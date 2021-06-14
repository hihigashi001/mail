import { useState, useEffect } from "react";
import { fetchMailData, deleteMailData } from "src/lib/function";

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
  const handleOnClick = (id: string, index: number) => {
    deleteMailData(id);
    const newMailData = [ ...mailData ]
    newMailData.splice(index, 1);
    setMailData(newMailData);
  };
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>No</th>
          <th>投稿日時</th>
          <th>名前</th>
          <th>メールアドレス</th>
          <th>内容</th>
          <th>アクション</th>
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
              <td>
                <button
                  className="p-4 bg-primary hover:bg-secondary text-white font-bold text-xs focus:outline-none rounded-lg"
                  onClick={() => handleOnClick(mail.id, index)}
                >
                  削除
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
