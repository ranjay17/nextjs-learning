import Link from "next/link";

export const metadata = {
  title: "Products Store - Products List",
};

export default function Products() {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div
      style={{
        width: "400px",
        margin: "60px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "6px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Products Page
      </h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((id) => (
          <li
            key={id}
            style={{
              marginBottom: "10px",
              padding: "8px",
              backgroundColor: "#fff",
              borderRadius: "4px",
              border: "1px solid #eee",
              textAlign: "center",
            }}
          >
            <Link
              href={`/products/${id}`}
              style={{
                textDecoration: "none",
                color: "#0070f3",
                fontWeight: "500",
              }}
            >
              Product {id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
