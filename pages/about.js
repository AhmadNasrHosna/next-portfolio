import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";

function About({ user }) {
  return (
    <Layout pageTitle="About Me" docTitle="About Me">
      <img
        src={user.avatar_url}
        alt={user.name}
        title="Me :d"
        height="150"
        className="user__avatar"
      />
      <p>I'm {user.name}. A JavaScript developer from Egypt.</p>
      <p>
        That was 10 years ago (in 2011) when I fell in love with CSS. Years
        later, a friend introduced me to web development, and then I actually
        started learning Front-end development in October 2016, and at that
        point I was mind blown by all that new powers!
      </p>
      <p>
        Currently (2018-2019-2020), I’am working on improving my skills in
        Front-end development, in an attempt to be a special one of those people
        who write code and design for the web. My passion lies in building clean
        and modern code.
      </p>

      <p>
        Have questions or suggestions? Feel free to hit me up on{" "}
        <a href="https://twitter.com/ahmedhosna95">Twitter</a>.
      </p>

      <style jsx>{`
        .user__avatar {
          margin-top: 0.9rem;
          float: left;
          border-radius: 50%;
          border: 1px solid #ddd;
          box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.6);
          margin-right: 1.5rem;
        }
      `}</style>

      <style jsx global>{`
        .o-main {
          max-width: 80ch;
        }
      `}</style>
    </Layout>
  );
}

About.getInitialProps = async () => {
  const res = await fetch("http://api.github.com/users/ahmedhosna95");
  const data = await res.json();

  return { user: data };
};

export default About;
