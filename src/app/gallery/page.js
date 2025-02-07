import Image from "next/image";
import image from "../../assets/next.jpg";

const GalleryPage = () => {
  return (
    <div className="text-center">
      <h1>Static Image</h1>
      <img
        src="https://i.pinimg.com/736x/7b/43/64/7b4364e23626a24838155a63bb1892f2.jpg"
        alt="placeholder"
        width={300}
        height={300}
        className="mx-auto"
      />
      <h1>Next Image</h1>
      {/* 
      Image component is used to optimize images for better performance.
        It uses the next/image package to optimize images.
        Convert the jpg/png images to webp format for better performance.
      */}
      <Image
        src="https://i.pinimg.com/736x/7b/43/64/7b4364e23626a24838155a63bb1892f2.jpg"
        alt="placeholder"
        width={300}
        height={300}
        className="mx-auto"
      />
      <h1>Next Image from local</h1>
      <Image
        src={image}
        alt="placeholder"
        width={300}
        height={300}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
