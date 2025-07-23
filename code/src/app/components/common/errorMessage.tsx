type Props = {
  message: string;
  className?: string;
};

export default function ErrorMessage({ message, className = 'text-sm text-red-600 mt-2' }: Props) {
  if (!message) return null;

  return <p className={className}>{message}</p>;
}