import matter from "gray-matter";
import React from "react";
import fs from "fs";
import Link from "next/link";
import { DateTime } from "luxon";
import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/app/components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  // const filename = slug + ".md";
  // const filePath = path.join(process.cwd(), "posts", filename);
  // console.log(filePath);
  // const { data, content } = matter(fs.readFileSync(filePath, "utf-8"));

  return (
    <section>
      <div className="container mx-auto p-6">
        <Link
          href="/blogs"
          className="p-2 text-sm rounded hover:bg-gray-400 bg-gray-300"
        >
          Go Back
        </Link>
        <div className="mt-5">
          <h1 className="text-4xl">{post.data.title}</h1>
          <p className="text-sm my-2">
            Posted on{" "}
            {DateTime.fromISO(post.data.date).toLocaleString(
              DateTime.DATE_FULL
            )}
          </p>
        </div>
        <div className="my-6">
          <article className="prose max-w-none prose-img:rounded-xl prose-img:shadow-md prose-a:text-blue-600">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PostPage;
