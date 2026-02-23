import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const PhotoPlaceholder = ({
  className = "",
  label = "Add Photo",
  aspectRatio = "aspect-video",
}: {
  className?: string;
  label?: string;
  aspectRatio?: string;
}) => (
  <div className={`photo-placeholder rounded-lg ${aspectRatio} ${className}`}>
    <div className="flex flex-col items-center gap-2">
      <Camera className="w-8 h-8" />
      <span className="text-sm font-body">{label}</span>
    </div>
  </div>
);

export default PhotoPlaceholder;
