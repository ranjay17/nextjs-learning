
async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function ProductDetail({ params }) {
  const { id } = await params;
  const product = await getProduct(id);
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
    </div>
  );
}
