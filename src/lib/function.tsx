import dayjs from "dayjs";
import { db } from "src/lib/firebase";

// メールデータの取得（全件）
export const fetchMailData = async () => {
  const res = await db.collection("mail").orderBy("createAt").get();
  const mail = res.docs.map((doc) => {
    const DATE = dayjs(doc.data().createAt.toDate());
    return {
      id: doc.id,
      name: doc.data().name,
      mail: doc.data().mail,
      contents: doc.data().contents,
      createAt: DATE.format("YYYY-MM-DD HH:mm:ss"),
    };
  });
  return mail;
};
