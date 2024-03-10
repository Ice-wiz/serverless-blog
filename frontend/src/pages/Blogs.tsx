import { BlogCard } from "../components/BlogCard";
import { Appbar } from "../components/Appbar";

export const Blogs = () => {
  return (
    <div>
      <Appbar />
      <BlogCard
        id={1}
        authorName={"aryan"}
        title={"how to scale your business using social media"}
        content={
          "lets discuss on how to scale your social media business for good lets discuss on how to scale your social media business for goodlets discuss on how to scale your social media business for good "
        }
        publishedDate={"13/2/2002"}
      />
      <BlogCard
        id={1}
        authorName={"aryan"}
        title={"how to scale your business using social media"}
        content={
          "lets discuss on how to scale your social media business for good lets discuss on how to scale your social media business for goodlets discuss on how to scale your social media business for good "
        }
        publishedDate={"13/2/2002"}
      />
      <BlogCard
        id={1}
        authorName={"aryan"}
        title={"how to scale your business using social media"}
        content={
          "lets discuss on how to scale your social media business for good lets discuss on how to scale your social media business for goodlets discuss on how to scale your social media business for good "
        }
        publishedDate={"13/2/2002"}
      />
    </div>
  );
};
