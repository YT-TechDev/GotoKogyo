// components/Testimonials.tsx
'use client'
import WhileViewAnimation from "@/utils/WhileViewAnimation";
import { motion } from "motion/react";

export default function Testimonials() {
    const ViewObjects = {
        Sectiontitle:"お客様の声",
        consumerTitle:["「丁寧で安心できる施工でした！」","「またお願いしたいと思います。」"],
        consumerText:[`
            自宅の壁の補修工事を頼みました！
            資料請求の時点でも人相がよくこの業者に頼みたいと思い
            後藤興行さんに依頼しました。

            丁寧な施工で事後対応もしっかりしていました！
            この度は、ありがとうございました！
        
        `,
        `
            自宅の屋根の補修工事を頼みました！
            資料請求の時点でも人相がよくこの業者に頼みたいと思い
            後藤興行さんに依頼しました。

            丁寧な施工で事後対応もしっかりしていました！
            この度は、ありがとうございました！
        `],
    }

    const AnimationDelayTime:number = 0.15;


  return (
    <section className=" bg-gray-100 text-black">
        <div className="px-6 text-center p-10">
            <motion.div initial={{scale:0}} whileInView={{scale:1,transition:{duration:0.1,delay:AnimationDelayTime}}} className="flex justify-center items-center m-5 shadow ">
                <motion.h2 initial={{scale:0}} whileInView={{scale:1,transition:{duration:0.1,delay:AnimationDelayTime}}} className="text-5xl font-bold">{ViewObjects.Sectiontitle}</motion.h2>
            </motion.div>
        </div>
        <div className="inline md:inline lg:inline-flex itemns-center mt-5 space-y-5 lg:space-y-0 lg:space-x-5">
            <WhileViewAnimation>
                <div className="bg-amber-100 rounded-xl h-[100vm] text-center m-5 p-5">
                    <motion.h1 initial={{scale:0}} whileInView={{scale:1, transition:{duration:0.15,delay:AnimationDelayTime}}} className="font-bold text-2xl">{ViewObjects.consumerTitle[0]}</motion.h1>
                    <motion.div initial={{scale:0}} whileInView={{scale:1, transition:{duration:0.2,delay:AnimationDelayTime}}} className="flex-col mt-5 m-2.5 p-2.5">
                        <p>{ViewObjects.consumerText[0]}</p>
                    </motion.div>
                </div>
            </WhileViewAnimation>
            <WhileViewAnimation>
                <div className="bg-amber-100 rounded-xl h-[100vm] text-center m-5 p-5">
                    <motion.h1 initial={{scale:0}} whileInView={{scale:1, transition:{duration:0.15,delay:AnimationDelayTime}}} className="font-bold text-2xl">{ViewObjects.consumerTitle[1]}</motion.h1>
                    <motion.div initial={{scale:0}} whileInView={{scale:1,transition:{duration:0.2,delay:AnimationDelayTime}}} className="flex-col mt-5 m-2.5 p-2.5">
                        <p>{ViewObjects.consumerText[0]}</p>
                    </motion.div>
                </div>
            </WhileViewAnimation>
            
        </div>
    </section>
  );
}