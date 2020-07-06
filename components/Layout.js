import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = (url) => {
  console.log(url);
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Layout({ children, pageTitle, docTitle }) {
  return (
    <div className="o-page">
      <Head>
        <title>{docTitle}</title>
      </Head>
      <header>
        <h1>Next Portfolio</h1>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          {" | "}
          <Link href="/about">
            <a>About</a>
          </Link>
          {" | "}
          <Link href="/hireme">
            <a>Hire me</a>
          </Link>
        </nav>
      </header>
      <main>
        <h2>{pageTitle}</h2>
        {children}
      </main>
      <footer>
        <span>Copyright reserved &copy; {new Date().getFullYear()}</span>
      </footer>
      <style jsx>{`
        .o-page {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        main {
          flex: 1;
          padding: 1em;
        }

        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        header h1 {
          margin: 0;
          font-size: 28px;
        }

        footer {
          margin-top: auto;
          text-align: center;
        }

        header,
        footer {
          padding: 1em;
          background: #eaeaea;
        }

        h1,
        h2 {
          letter-spacing: -0.04em;
        }
      `}</style>
    </div>
  );
}

export default Layout;
