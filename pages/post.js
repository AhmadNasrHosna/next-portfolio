import Layout from "../components/Layout";
import { useRouter } from "next/router";

// https://github.com/vercel/next.js/issues/2833#issuecomment-414919347

function Post() {
  const { query } = useRouter();

  console.log(query);
  return (
    <Layout pageTitle="Blog Article" docTitle={query.id}>
      <article className="c-article">
        <header className="c-article__header">
          <h2 className="c-article__title">{query.id}</h2>
        </header>
        <section className="c-article__content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
            ipsa! Repudiandae cum dolorem veniam. Consequatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus optio ipsa beatae quas eius dolores? Ab dolore quae
            repudiandae distinctio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            laborum impedit aperiam nihil, eveniet velit ab quaerat accusantium
            nostrum aliquam labore incidunt illo excepturi dicta deleniti quod
            odit culpa est dolorum sed rerum vel? Sequi voluptas earum
            voluptatibus. Suscipit alias saepe, sint ratione maiores fuga
            repellat soluta. Ex fugiat aliquid et laboriosam molestiae
            temporibus harum eius, ipsam, eveniet illo veniam!
          </p>
        </section>
      </article>

      <style jsx>{`
        .c-article__title {
          font-size: 58px;
          margin: 0 0 2rem;
        }
      `}</style>
    </Layout>
  );
}

export default Post;
