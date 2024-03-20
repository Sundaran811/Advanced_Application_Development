import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import Paragraph from "../Atoms/paragraph";
import FeatureItem from "../Admin/enquiryItem";
import { motion } from "framer-motion";

export default function Features() {
  const dataFeatures = [
    {
      id: 1,
      title: "Query no : 1",
      
      content:
        "Our skilled nursing services offer personalized care plans, expertly tailored to meet the diverse needs of each individual with compassion.",
    },
    {
      id: 2,
      title: "Query no : 2",
      
      content:
        "Experience personalized personal care services, attentively crafted to enhance daily living and promote well-being for your loved ones.",
    },
    {
      id: 3,
      title: "Query no : 3",
      
      content:
        "Rely on our meticulous medication management solutions, ensuring precise administration for optimal health outcomes.",
    },
  ];

  const content = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { y: -100, opacity: 0 },
  };

  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="px-5 py-16 flex flex-col gap-10 sm:pb-28 sm:px-10 md:pb-36">
        {/* Head Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={content}
          className="text-center flex flex-col items-center"
        >
          {/*<Subtitle style="mb-2">360° CUSTOMIZABLE</Subtitle>*/}
          <SubHead style="mb-[18px] sm:w-8/12 md:w-9/12 lg:w-7/12">
          Queries from the Users
          </SubHead>
          {/*<Paragraph
            fontSize="text-sm"
            color="text-black-400"
            style="sm:w-3/5 md:w-7/12 lg:w-1/3"
          >
            Take total control of your eCommerce business by owning the source
            code and data that drive it.
          </Paragraph>*/}
        </motion.div>

        {/* Feature Items */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          {dataFeatures?.map((feature, index) => (
            <FeatureItem key={feature.id} feature={feature} i={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
