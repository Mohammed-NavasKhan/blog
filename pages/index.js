import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Assalamu Alaikum, Everyone, I am a <b>Software Engineer.</b>
        </p>
        <p>
          A highly motivated and ambitious self-taught web developer with a keen
          eye for design and a passion for building dynamic, user-friendly web
          applications.
        </p>
        <p>
          I am proficient in the MERN stack (MongoDB, Express.js, React.js, and
          Node.js), React Native, Docker, Jenkins, Photoshop and constantly
          seeking to improve my skills and stay ahead of the latest industry
          trends 🚀.
        </p>
        <p>
          I have a strong understanding of web development principles and
          extensive experience with JavaScript, HTML, and CSS 💻
        </p>
        <p>
          I am skilled in developing and deploying full-stack web applications
          that are both visually appealing and highly responsive 🎨
        </p>
        <p>
          I am a problem-solver at heart with a desire to create visually
          stunning and intuitive designs.
        </p>
        <p>
          Follow me for insightful coding tutorials, tips and tricks, and the
          latest updates on my projects.
        </p>
        <div>
          <Link href="https://github.com/Mohammed-NavasKhan" target="blank">
            Github
          </Link>
          {/* <br />
          <Link href="https://github.com/alekszemz"> Sample Profile</Link>
          <br />
          <Link href="/posts/first-post"> First Post</Link>
          <br /> */}
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
// Server Side Rendering
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }
