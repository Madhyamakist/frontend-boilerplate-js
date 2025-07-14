
interface CardProps {
  title: string;
  image: string;
  subtitle?: string;
}

export default function Card({ title, image, subtitle }: CardProps) {
  const imageUrl = image || '/placeholder.jpg';
  const subHeading = subtitle || 'Unknown Artist';
  return (
    <div className="card">
      <h3 className="font-[500]">{title}</h3>
      <img src={imageUrl} alt={title} className="deptImage" />
      <span className="text-sm">{subHeading}</span>
    </div>
  );
}
