async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  return {
    title: `${product.title} - Products Store`,
  };
}

export default async function ProductDetail({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div
      style={{
        width: "500px",
        margin: "60px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "6px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ marginBottom: "10px", textAlign: "center" }}>
        {product.title}
      </h1>

      <p
        style={{
          marginBottom: "12px",
          color: "#555",
          textAlign: "center",
        }}
      >
        {product.description}
      </p>

      <p
        style={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: "16px",
        }}
      >
        Price: ₹{product.price}
      </p>
    </div>
  );
}
