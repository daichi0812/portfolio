"use client"

import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>C++</li>
                <li>Rust</li>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>React</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>マンスリーハッカソンvol.12 by サポーターズ (2023年12月)</li>
                <li>Sky株式会社 2 weeks サマーインターン (2024年9月)</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>None</li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
        console.log(isPending);
    }

    return (
        <section className="text-white pt-6" id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image className='rounded-xl' src="/images/logicode.jpeg" alt='' width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        About Me
                    </h2>
                    <p className='text-base lg:text-lg'>
                        青山学院大学理工学部情報テクノロジー学科に所属しています。大学でコンピュータサイエンスを学びながら、研究室でコンピュータグラフィックスの研究、個人または仲間とウェブ開発を行っています。特に、流体物理シミュレーションなどのCGに興味があり、これらの技術がメタバースやWeb3の未来においてどのように活用されるかに大きな関心を持っています。

                        CG研究では、効率的で現実的なシミュレーションを目指し、新しい技術やアルゴリズムの探索を続けています。また、ウェブ開発にも情熱を注いでおり、使いやすいウェブアプリケーションの構築にも力を入れています。C++やRust、TypeScript(Next.js)といった言語を駆使し、クリエイティブと技術の融合を目指して日々成長し続けています。

                        体育会自動車部員としても活動を行っており、毎年の大会に励んでいます。

                        趣味はドライブと邦ロック音楽を聴くことです。
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"} >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("experience")}
                            active={tab === "experience"} >
                            {" "}
                            Experience{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"} >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection