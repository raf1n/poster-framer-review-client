import React from "react";
import { useTitle } from "react-use";
const Blog = () => {
  const HandleTitle = () => {
    useTitle("PF || Blogs");
    return null;
  };
  HandleTitle();
  return (
    <section className="text-gray-800">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Q/A BLOG
        </h2>
        <div className="divide-y divide-gray-300">
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              Difference between SQL and NoSQL
            </h3>
            <p className="md:pl-0 md:col-span-7">
              SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called
              RDBMS or Relational Databases, whereas NoSQL is a Non-relational
              or Distributed Database. SQL databases are table-based databases,
              whereas NoSQL databases can be document-based, key-value pairs,
              and graph databases. SQL databases are vertically scalable, while
              NoSQL databases are horizontally scalable.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              What is JWT, and how does it work?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued. Authentication server
              verifies the credentials and issues a jwt signed using either a
              secret salt or a private key. User's Client uses the JWT to access
              protected resources by passing the JWT in HTTP Authorization
              header. Resource server then verifies the authenticity of the
              token using the secret salt/ public key.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              What is the difference between javascript and NodeJS?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              JavaScript is a high-level programming language that makes our web
              pages and web applications dynamic and interactive by giving them
              the ability to think and act. JavaScript is a lightweight (easy to
              learn syntax) and object-oriented programming language whereas
              Node.js is a runtime environment built on google v8 engine and
              typically used to represent a list of objects and functions that
              JavaScript programs can access.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              How does NodeJS handle multiple requests at the same time?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              Numerous client requests are received by NodeJS, which adds them
              to EventQueue. The event-driven architecture approach was used in
              the construction of NodeJS. The EventLoop in NodeJS is an infinite
              loop that accepts and processes requests. The EventQueue's
              listener is the EventLoop. The event loop would handle the request
              itself and send the response back to the client by itself if
              NodeJS can process the request without I/O blocking. However, you
              can handle numerous requests concurrently by utilizing the worker
              threads or NodeJS cluster modules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
