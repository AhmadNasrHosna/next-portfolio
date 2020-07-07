import Layout from "../components/Layout";

function NotFound({ statusCode }) {
  return (
    <Layout pageTitle="404 Error" docTitle="Page Not Found!">
      {statusCode ? (
        `Could not load your data: Status Code ${statusCode}`
      ) : (
        <p>This page could not be found.</p>
      )}
    </Layout>
  );
}

export default NotFound;
