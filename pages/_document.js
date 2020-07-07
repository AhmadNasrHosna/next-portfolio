import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta lang="en" />
          <meta
            charset="UTF-8"
            name="description"
            content="I'm Ahmed Nasr. A JavaScript developer from Egypt."
          />
          <meta name="keywords" content="programing, code, javascript, css" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>{`
          body {
            padding: 0;
            margin: 0;
            font-family: "Barlow", sans-serif;
            color: #212121;
            font-size: 18px;
          }

          a {
            text-decoration: none;
            color: #555;
          }

          a:hover {
            text-decoration: underline;
            color: #212121;
          }

          h1,
          h2,
          h3,
          h4,
          h5 {
            font-weight: 700;
            letter-spacing: -0.04em;
          }

          p,
          li {
            line-height: 1.6;
          }

          .o-main a {
            text-decoration: underline;
          }

          .o-main a:hover {
            text-decoration: none;
          }
        `}</style>
      </html>
    );
  }
}

export default MyDocument;
