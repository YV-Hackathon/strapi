import type { Schema, Struct } from '@strapi/strapi';

export interface DefaultTopic extends Struct.ComponentSchema {
  collectionName: 'components_default_topics';
  info: {
    description: 'A speaking topic';
    displayName: 'Topic';
  };
  attributes: {
    category: Schema.Attribute.Enumeration<
      [
        'preaching',
        'teaching',
        'counseling',
        'leadership',
        'evangelism',
        'worship',
        'youth',
        'marriage',
        'family',
        'prayer',
        'other',
      ]
    >;
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'default.topic': DefaultTopic;
    }
  }
}
