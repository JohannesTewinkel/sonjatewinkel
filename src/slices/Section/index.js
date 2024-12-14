'use client'

import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";


/**
 * Component for "Section" Slices.
 */
const Section = ({ slice }) => {
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
              <model-viewer  
              src={item.model3d.url} 
              ar 
              shadow-intensity="1" camera-controls 
              touch-action="pan-y">

              </model-viewer> 
            </div>
           
            <div className="flistext">
              <div className="title">
                {item.title}
              </div>
              <div className="text">
                <PrismicRichText field={item.text} />
              </div>
              <div className="button">
                {item.button}
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
