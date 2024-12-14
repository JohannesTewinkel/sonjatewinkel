// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Navigation → Links*
 */
export interface NavigationDocumentDataLinksItem {
  /**
   * Label field in *Navigation → Links*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Optional - Label for the link
   * - **API ID Path**: navigation.links[].label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.TitleField;

  /**
   * Link field in *Navigation → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for navigation item
   * - **API ID Path**: navigation.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | FooterSlice
  | SectionSlice
  | BackgroundImageSlice
  | Model3DSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Parent field in *Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: page.parent
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  parent: prismic.ContentRelationshipField<"page">;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type ProjectDocumentDataSlicesSlice = ImageSectionSlice;

/**
 * Content for Project documents
 */
interface ProjectDocumentData {
  /**
   * Title field in *Project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Slice Zone field in *Project*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectDocumentDataSlicesSlice> /**
   * Meta Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: project.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: project.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the site
   * - **API ID Path**: settings.siteTitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  siteTitle: prismic.TitleField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | NavigationDocument
  | PageDocument
  | ProjectDocument
  | SettingsDocument;

/**
 * Primary content in *BackgroundImage → Default → Primary*
 */
export interface BackgroundImageSliceDefaultPrimary {
  /**
   * Backdrop field in *BackgroundImage → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: background_image.default.primary.backdrop
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  backdrop: prismic.ImageField<never>;
}

/**
 * Default variation for BackgroundImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BackgroundImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BackgroundImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *BackgroundImage*
 */
type BackgroundImageSliceVariation = BackgroundImageSliceDefault;

/**
 * BackgroundImage Shared Slice
 *
 * - **API ID**: `background_image`
 * - **Description**: BackgroundImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BackgroundImageSlice = prismic.SharedSlice<
  "background_image",
  BackgroundImageSliceVariation
>;

/**
 * Primary content in *Footer → Default → Primary*
 */
export interface FooterSliceDefaultPrimary {
  /**
   * footer_text field in *Footer → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.default.primary.footer_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  footer_text: prismic.RichTextField;
}

/**
 * Default variation for Footer Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FooterSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Footer*
 */
type FooterSliceVariation = FooterSliceDefault;

/**
 * Footer Shared Slice
 *
 * - **API ID**: `footer`
 * - **Description**: Footer
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSlice = prismic.SharedSlice<"footer", FooterSliceVariation>;

/**
 * Primary content in *ImageSection → Default → Primary*
 */
export interface ImageSectionSliceDefaultPrimary {
  /**
   * Image field in *ImageSection → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_section.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Caption field in *ImageSection → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_section.default.primary.caption
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  caption: prismic.RichTextField;
}

/**
 * Default variation for ImageSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ImageSection*
 */
type ImageSectionSliceVariation = ImageSectionSliceDefault;

/**
 * ImageSection Shared Slice
 *
 * - **API ID**: `image_section`
 * - **Description**: ImageSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSectionSlice = prismic.SharedSlice<
  "image_section",
  ImageSectionSliceVariation
>;

/**
 * Primary content in *Model3D → Default → Primary*
 */
export interface Model3DSliceDefaultPrimary {
  /**
   * Model3D field in *Model3D → Default → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: model3_d.default.primary.model3d
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  model3d: prismic.LinkToMediaField;
}

/**
 * Default variation for Model3D Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Model3DSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<Model3DSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Model3D*
 */
type Model3DSliceVariation = Model3DSliceDefault;

/**
 * Model3D Shared Slice
 *
 * - **API ID**: `model3_d`
 * - **Description**: Model3D
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Model3DSlice = prismic.SharedSlice<
  "model3_d",
  Model3DSliceVariation
>;

/**
 * Item in *Section → Default → Primary → Content*
 */
export interface SectionSliceDefaultPrimaryContentItem {
  /**
   * Title field in *Section → Default → Primary → Content*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section.default.primary.content[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *Section → Default → Primary → Content*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: lorem ipsum dolor sit amet blablabla
   * - **API ID Path**: section.default.primary.content[].text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Image field in *Section → Default → Primary → Content*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section.default.primary.content[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Model3D field in *Section → Default → Primary → Content*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: section.default.primary.content[].model3d
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  model3d: prismic.LinkToMediaField;

  /**
   * Button field in *Section → Default → Primary → Content*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: section.default.primary.content[].button
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  button: prismic.BooleanField;
}

/**
 * Primary content in *Section → Default → Primary*
 */
export interface SectionSliceDefaultPrimary {
  /**
   * Backdrop field in *Section → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section.default.primary.backdrop
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  backdrop: prismic.ImageField<never>;

  /**
   * alignLeft field in *Section → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: section.default.primary.alignleft
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  alignleft: prismic.BooleanField;

  /**
   * Content field in *Section → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: section.default.primary.content[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  content: prismic.GroupField<Simplify<SectionSliceDefaultPrimaryContentItem>>;
}

/**
 * Default variation for Section Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Section*
 */
type SectionSliceVariation = SectionSliceDefault;

/**
 * Section Shared Slice
 *
 * - **API ID**: `section`
 * - **Description**: Section
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionSlice = prismic.SharedSlice<
  "section",
  SectionSliceVariation
>;

/**
 * Primary content in *SubTitle → Default → Primary*
 */
export interface SubTitleSliceDefaultPrimary {
  /**
   * subTitle field in *SubTitle → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_title.default.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;
}

/**
 * Default variation for SubTitle Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubTitleSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SubTitleSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SubTitle*
 */
type SubTitleSliceVariation = SubTitleSliceDefault;

/**
 * SubTitle Shared Slice
 *
 * - **API ID**: `sub_title`
 * - **Description**: SubTitle
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubTitleSlice = prismic.SharedSlice<
  "sub_title",
  SubTitleSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataLinksItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      ProjectDocument,
      ProjectDocumentData,
      ProjectDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      BackgroundImageSlice,
      BackgroundImageSliceDefaultPrimary,
      BackgroundImageSliceVariation,
      BackgroundImageSliceDefault,
      FooterSlice,
      FooterSliceDefaultPrimary,
      FooterSliceVariation,
      FooterSliceDefault,
      ImageSectionSlice,
      ImageSectionSliceDefaultPrimary,
      ImageSectionSliceVariation,
      ImageSectionSliceDefault,
      Model3DSlice,
      Model3DSliceDefaultPrimary,
      Model3DSliceVariation,
      Model3DSliceDefault,
      SectionSlice,
      SectionSliceDefaultPrimaryContentItem,
      SectionSliceDefaultPrimary,
      SectionSliceVariation,
      SectionSliceDefault,
      SubTitleSlice,
      SubTitleSliceDefaultPrimary,
      SubTitleSliceVariation,
      SubTitleSliceDefault,
    };
  }
}
