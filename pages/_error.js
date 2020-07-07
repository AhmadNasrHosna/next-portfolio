import Layout from "../components/Layout";

function NotFound() {
  return (
    <Layout pageTitle="404 Error" docTitle="Page Not Found!">
      <p>This page could not be found.</p>

      <style jsx global>{`
        .o-main {
          text-align: center;
        }
      `}</style>
    </Layout>
  );
}

export default NotFound;
