const DynamicProductDetailPage = async ({ params, searchParams }) => {
  const productId = await params.productId;

  console.log(await searchParams);

  return (
    <div>
      <h1 className="text-xl text-center">
        This is Single Product Details Page : {productId}
      </h1>
    </div>
  );
};

export default DynamicProductDetailPage;
