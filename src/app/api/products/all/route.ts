import data from '../../data.json'
export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const allProducts = data.products
  return Response.json(allProducts)
}
