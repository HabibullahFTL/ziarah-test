import { IconType } from 'react-icons';

interface IProps {
  icon: IconType;
  label: string;
}

const Feature = ({ icon, label }: IProps) => {
  const Icon = icon;
  return (
    <div className="flex items-center gap-1 text-gray-600">
      <Icon className="text-sm md:text-lg shrink-0" />
      <span className="text-xs md:text-sm"> {label}</span>
    </div>
  );
};

export default Feature;
