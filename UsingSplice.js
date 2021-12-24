function usingSplice(array, start, deleteCount, item) {
  const newArray= array.splice(start,deleteCount,item);
  return newArray;
}
