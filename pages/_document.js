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
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
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
            font-family: "IBM Plex Sans", sans-serif;
          }

          a {
            text-decoration: none;
            color: #0055cc;
          }
          a:hover {
            text-decoration: underline;
            color: #0033cc;
          }
        `}</style>
      </html>
    );
  }
}

export default MyDocument;
