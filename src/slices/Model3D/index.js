
'use client'
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Component for "Model3D" Slices.
 */
const Model3D = ({ slice })=> {
  console.log(slice)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <model-viewer  
      src={slice.primary.model3d.url} 
      ar 
      shadow-intensity="1" camera-controls 
      touch-action="pan-y">

      </model-viewer>
    </section>
  );
};

export default Model3D;
