import matter from "gray-matter";
import React from "react";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { DateTime } from "luxon";
import Markdown from "markdown-to-jsx";

function PostPage({ params }) {
  const { slug } = params;
  const { data, content } = matter(
    fs.readFileSync(path.join("posts", `${slug}.md`), "utf-8")
  );

  return (
    <section>
      <div className="container mx-auto p-6">
        <Link
          href="/blog"
          className="p-2 text-sm rounded hover:bg-gray-400 bg-gray-300"
        >
          Go Back
        </Link>
        <div className="mt-5">
          <h1 className="text-4xl">{data.title}</h1>
          <p className="text-sm my-2">
            Posted on{" "}
            {DateTime.fromISO(data.date).toLocaleString(DateTime.DATE_FULL)}
          </p>
        </div>
        <div className="my-6">
          <article className="prose max-w-none prose-img:rounded-xl prose-img:shadow-md prose-a:text-blue-600">
            <Markdown>{content}</Markdown>
          </article>
        </div>
      </div>
    </section>
  );
}

export default PostPage;
