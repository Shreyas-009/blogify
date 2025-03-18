import React from "react";
import BlogCard from "../components/BlogCard";

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
    <div
      className="max-w-[1100px] mx-auto py-10 sm:py-12 lg:py-16 px-4 mt-8 sm:mt-12 lg:mt-16"
      id="blogs"
    >
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 lg:mb-10 leading-tight">
        THE MOST RECENT
        <br className="hidden sm:block" />
        <span className="sm:ml-0">LOCAL REAL ESTATE NEWS</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:h-[390px]">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className={`${
              index === 0 || index === 3 ? "sm:col-span-2 lg:col-span-1" : ""
            } h-64 sm:h-auto`}
          >
            <BlogCard image={post.image} title={post.title} link={post.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
