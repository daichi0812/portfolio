"use client"

import React, { useState, useRef } from 'react'
import ProjectsCard from './ProjectsCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from "framer-motion"

const projectsData = [
    {
        id: 1,
        title: "SurperwindUI",
        description: "SuperwindUIは、スタイルを固定化することにより、モダンなUIを超速で開発できるReact, Next.jsのUIコンポーネントライブラリです。また、従来のUIコンポーネントライブラリとは比べ、コンポーネントの単位が大きく、ドキュメントをそこまで読まなくても、フロントエンド初学者でも簡単に使うことができます。",
        image: "/images/projects/superwindui.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/balckowl/superwindui",
        previewUrl: "https://superwindui.netlify.app",
    },
    {
        id: 2,
        title: "Logicode Authentication",
        description: "同学科の仲間たちで作った「logicode」というチームの認証システムを Next.js、TailwindCSS, Auth.jsを用いて作成しました。",
        image: "/images/projects/auth-logicode.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/daichi0812/next14-authv5-tutorial",
        previewUrl: "https://auth.logicode.tech",
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    )

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
            </div>
            <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectsCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectsSection