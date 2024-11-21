import { PrismicRichText } from "@/components/PrismicRichText";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";



/**
 * Props for `Section`.
 */
export type SectionProps = SliceComponentProps<Content.SectionSlice>;

/**
 * Component for "Section" Slices.
 */
const Section = ({ slice }: SectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="Section"

    >
      <div className="title">
      <PrismicRichText field={slice.primary.text} />
      </div>
     
     <div className="backdrop">
      <PrismicNextImage field={slice.primary.backdrop} />
     </div>
    
      {slice.primary.content.map((item) => (
        <>
          <PrismicRichText field={item.text} />
          <div className="bild">
          <PrismicNextImage field={item.image} />
          </div>
          
          {item.button}
        </>
      ))}
      
    </section>
  );
};

export default Section;
