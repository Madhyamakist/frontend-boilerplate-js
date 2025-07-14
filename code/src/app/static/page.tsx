import Section from '../components/section';
import Image from 'next/image';

export default function Static() {
    return (
        <div className="p-4 justify-center">
            <h1>Static Page</h1>
            <Section />
            <Section />
            <Image
                src="/demo.png"
                alt="Demo Image"
                width={320}
                height={320}
                className=' mx-auto my-4 px-4'
            />
            <Section />
        </div>
    )
}