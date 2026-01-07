async function getProducts(){
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
      <ul>
        {
          products.map((item)=>{
            return (
              <div key={item.id}>
                <li>{item.title}</li>
              </div>
            );
          })
        }
      </ul>
    </div>
  );
}
