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
      className="section"

    >
      
     <div className="backdrop">
      <PrismicNextImage field={slice.primary.backdrop} />
     </div>
    
      {slice.primary.content.map((item) => (
        <>
          <div className={`flex ${slice.primary.alignleft ? 'left' : ''}`}>
            <div className="bild">
              <PrismicNextImage field={item.image} />
            </div>
           
            <div className="flistext">
              <div className="title">
                {item.title}
              </div>
              <div className="text">
                <PrismicRichText field={item.text} />
              </div>
            </div>
          </div>
          
          {item.button}
        </>
      ))}
      
    </section>
  );
};

export default Section;
