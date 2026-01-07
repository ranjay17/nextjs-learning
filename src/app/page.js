import Image from "next/image";

const styles = {
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  },

  image: {
    borderRadius: "12px",
    objectFit: "cover",
  },

  list: {
    listStyle: "none",
    padding: 0,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
  },

  listItem: {
    padding: "16px",
    background: "#f5f5f5",
    borderRadius: "10px",
    textAlign: "center",
    fontWeight: "500",
  },
};

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data.products;
}
export default async function Home() {
  const products = await getProducts();
  return (
    <div>
      <h1>Welcome to the Products Store</h1>
      <div style={styles.imageWrapper}>
        <Image
          src="/images/gucci.jpeg"
          alt="Gucci"
          width={200}
          height={200}
          priority
          style={styles.image}
        />
      </div>
      <ul style={styles.list}>
        {products.map((item) => (
          <li key={item.id} style={styles.listItem}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
