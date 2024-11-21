import { PrismicRichText } from "@/components/PrismicRichText";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";


/**
 * Props for `ImageSection`.
 */
export type ImageSectionProps = SliceComponentProps<Content.ImageSectionSlice>;

/**
 * Component for "ImageSection" Slices.
 */
const ImageSection = ({ slice }: ImageSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="image-section"   
    >
      <PrismicNextImage field={slice.primary.image} />  
      <PrismicRichText field={slice.primary.caption} />
    
    </section>
  );
};

export default ImageSection;
