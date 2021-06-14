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

// メールデータの削除（props=id）
export const deleteMailData = async (id: string) => {
  try {
    await db.collection("mail").doc(id).delete();
  } catch (err) {
    console.log("Error delete document:", err);
  }
};
