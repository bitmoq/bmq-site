import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { DateTime } from "luxon";

const getPosts = () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((file) => {
    const slug = file.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(path.join("posts", file), "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  return posts.sort((a, b) => {
    return (
      DateTime.fromISO(b.frontmatter.date) -
      DateTime.fromISO(a.frontmatter.date)
    );
  });
};

function BlogListPage() {
  const posts = getPosts();
  return (
    <section>
      <div className="bg-red-200 py-10 mt-10">
        <h1 className="text-4xl font-bold text-center md:text-5xl">Blogs</h1>
        <p className="text-center m-2">
          Read through the technical & business articles that our team shares
        </p>
      </div>
      <div className="container mx-auto p-6">
        <div className="flex flex-wrap my-4">
          {posts.map((post) => (
            <div key={post.slug} className="my-4">
              <h2 className="text-2xl font-bold text-gray-700 md:text-3xl">
                {post.frontmatter.title}
              </h2>
              <div className="mt-2 flex gap-1">
                {post.frontmatter.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag}`}
                    className="text-white bg-gray-500 rounded text-xs px-2 py-1"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              <p className="text-sm my-2">
                Posted on{" "}
                {DateTime.fromISO(post.frontmatter.date).toLocaleString(
                  DateTime.DATE_FULL
                )}
              </p>
              <p className="my-4 text-sm md:text-base">
                {post.frontmatter.excerpt}
              </p>
              <button className="pt-2 text-red-500 font-bold baseline hover:text-red-400 md:block">
                <Link href={`/blog/${post.slug}`}>Read More...</Link>
              </button>
              <hr className="mt-3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogListPage;
