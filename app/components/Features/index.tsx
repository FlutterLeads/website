import Image from "next/image";
import Link from 'next/link';

interface datatype {
    imgSrc: string;
    heading: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/features/time.svg",
        heading: "Streamlined Legal Assistance",
        paragraph: 'We offer a comprehensive legal arm to manage documentation and provide real-time updates on application status.',
    },
    {
        imgSrc: "/assets/features/signal.svg",
        heading: " Interest Rate Optimization",
        paragraph: 'Our platform monitors RBIs REPO rate and negotiates with banks to secure the best interest rates for our customers.',

    },
    {
        imgSrc: "/assets/features/dollar.svg",
        heading: "Payment",
        paragraph: 'All your loans / debts in a single place. Pay your loans / debts with a single click.',

    }
]

const Features = () => {
    return (
        <div className="bg-babyblue" id="features">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">What  We do?</h3>
                <h5 className="text-black opacity-60 text-lg font-normal text-center">
In Indias dynamic financial landscape accessing loans is hindered by challenges such as a lack of transparency in loan status and document location credit score concerns due to multiple inquiries affecting scores, limited awareness of government financial assistance schemes leading to missed opportunities and inadequate communication on RBIs REPO rate changes and their impact on loan interest rates Addressing these issues is crucial to streamline and enhance the efficiency of the loan application process for customers</h5>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-10'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-5 featureShadow'>

                            <Image src={item.imgSrc} alt={item.imgSrc} width={55} height={55} className="mb-2" />
                            <h3 className="text-2xl font-semibold text-black mt-5">{item.heading}</h3>
                            <h4 className='text-lg font-normal text-black opacity-50 my-2'>{item.paragraph}</h4>
                            <Link href={'/'} className="text-electricblue text-xl font-medium flex gap-2 pt-10 pb-2">
                                Learn more <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features;
