import type { Schema, Attribute } from '@strapi/strapi';

export interface PagePropertiesMetaTag extends Schema.Component {
  collectionName: 'components_page_properties_meta_tags';
  info: {
    displayName: 'MetaTag';
    icon: 'code';
  };
  attributes: {
    Name: Attribute.String;
    Content: Attribute.Text;
  };
}

export interface PagePropertiesSeo extends Schema.Component {
  collectionName: 'components_page_properties_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
    description: '';
  };
  attributes: {
    MetaTitle: Attribute.String;
    MetaDescription: Attribute.String;
    MetaTag: Attribute.Component<'page-properties.meta-tag', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page-properties.meta-tag': PagePropertiesMetaTag;
      'page-properties.seo': PagePropertiesSeo;
    }
  }
}
