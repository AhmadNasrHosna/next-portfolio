import Layout from "../components/Layout";
import Link from "next/link";

// https://github.com/vercel/next.js/issues/2833#issuecomment-414919347

function PostLink({ postTitle }) {
  const slug = postTitle.toLowerCase().split(" ").join("-");
  return (
    <Link href={`/post?id=${slug}`} as={`/blog/${slug}`}>
      <a>{postTitle}</a>
    </Link>
  );
}

function Blog() {
  return (
    <Layout pageTitle="Latest Articles" docTitle="Blog">
      <ul>
        <li>
          <PostLink postTitle="React for beginners" />
        </li>
        <li>
          <PostLink postTitle="vue" />
        </li>
        <li>
          <PostLink postTitle="Angular Post" />
        </li>
      </ul>
    </Layout>
  );
}

export default Blog;
