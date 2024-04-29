import type { Schema, Attribute } from '@strapi/strapi';

export interface NutritionalFactsFactItem extends Schema.Component {
  collectionName: 'components_nutritional_facts_fact_items';
  info: {
    displayName: 'Fact-item';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    percent: Attribute.Integer;
  };
}

export interface NutritionalFactsFact extends Schema.Component {
  collectionName: 'components_nutritional_facts_facts';
  info: {
    displayName: 'Fact';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    Fact: Attribute.Component<'nutritional-facts.fact-item', true>;
    percent: Attribute.Integer;
  };
}

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
      'nutritional-facts.fact-item': NutritionalFactsFactItem;
      'nutritional-facts.fact': NutritionalFactsFact;
      'page-properties.meta-tag': PagePropertiesMetaTag;
      'page-properties.seo': PagePropertiesSeo;
    }
  }
}
