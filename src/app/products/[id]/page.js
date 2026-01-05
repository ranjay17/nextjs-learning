export default async function ProductDetail({params}){
    const{id} = await params;
    return (
      <div>
        <h1>Product {id} details page — content coming soon!</h1>
      </div>
    );
}