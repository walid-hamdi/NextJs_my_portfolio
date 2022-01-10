import Link from "next/link";
import { motion } from "framer-motion";

const Project = ({ title, url, stacks, description }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
      className="w-full h-full p-5 bg-gray-800 bg-opacity-90 text-white  rounded-sm shadow-md cursor-pointer "
    >
      <p className="font-bold text-2xl uppercase mb-5">{title}</p>
      <p>{description}</p>
      <div className="mt-5">
        {stacks.map((stack) => (
          <span
            key={stack.title}
            className="inline-block border-2 m-1 border-gray-900 hover:bg-yellow-500 bg-white px-3 py-2 text-black rounded"
          >
            {stack.title}
          </span>
        ))}
      </div>
      <Link href={url}>
        <a target="_blank">
          <span className="inline-block border-2 m-1 shadow-xl bg-yellow-500 transition hover:scale-105  px-3 py-2 text-black rounded">
            Demo
          </span>
        </a>
      </Link>
    </motion.div>
  );
};

export default Project;
