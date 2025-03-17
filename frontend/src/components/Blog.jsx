import React from "react";
import ArrowIcon from "../assets/arrow-right.svg";
// import BlogImage1 from "../assets/Blog/blog-1.jpg";
// import BlogImage2 from "../assets/Blog/blog-2.jpg";
// import BlogImage3 from "../assets/Blog/blog-3.jpg";
// import BlogImage4 from "../assets/Blog/blog-4.jpg";

const BlogCard = ({ image, title, link }) => {
  return (
    <div className="relative rounded-lg overflow-hidden group h-full">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50 hover:bg-opacity-40 transition-all"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white flex flex-col justify-center gap-3">
        <h3 className="font-bold text-sm ">{title}</h3>
        <a
          href={link}
          className="text-white flex items-center group-hover:text-blue-300 transition-colors"
        >
          <span className="text-xs mr-2 font-semibold">Continue reading</span>
          <img src={ArrowIcon} alt="arrow" className="w-2 h-2" />
        </a>
      </div>
    </div>
  );
};

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Top 10 best appreciating condos in Las Vegas",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      id: 2,
      title: "The top 5 most livable Las Vegas neighborhood",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      id: 3,
      title: "In Las Vegas home prices have doubled in the...",
      image:
        "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      id: 4,
      title: "Las Vegas neighborhood where it's better...",
      image:
        "https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
  ];

  return (
    <div className="max-w-[1100px] mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-10">
        THE MOST RECENT
        <br />
        LOCAL REAL ESTATE NEWS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-[390px]">
        {posts.map((post) => (
          <BlogCard key={post.id} image={post.image} title={post.title} link={post.link} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
