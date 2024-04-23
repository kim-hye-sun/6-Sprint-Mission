//product item list api
export async function getItems({
  pageSize = 12,
  orderBy = "recent",
  page = "1",
}) {
  const query = `pageSize=${pageSize}&orderBy=${orderBy}&page=${page}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const body = await response.json();
  return body;
}
