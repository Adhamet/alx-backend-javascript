export default function getListStudentIds(arrOfObjs) {
  if (Array.isArray(arrOfObjs)) {
    return arrOfObjs.map((obj) => obj.id);
  }
  return [];
}
