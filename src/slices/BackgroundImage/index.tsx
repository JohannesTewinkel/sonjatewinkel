import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BackgroundImage`.
 */
export type BackgroundImageProps =
  SliceComponentProps<Content.BackgroundImageSlice>;

/**
 * Component for "BackgroundImage" Slices.
 */
const BackgroundImage = ({ slice }: BackgroundImageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for background_image (variation: {slice.variation})
      Slices
    </section>
  );
};

export default BackgroundImage;
