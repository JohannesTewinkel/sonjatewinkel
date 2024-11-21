import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SubTitle`.
 */
export type SubTitleProps = SliceComponentProps<Content.SubTitleSlice>;

/**
 * Component for "SubTitle" Slices.
 */
const SubTitle = ({ slice }: SubTitleProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for sub_title (variation: {slice.variation}) Slices
    </section>
  );
};

export default SubTitle;
