import type { Schema, Struct } from '@strapi/strapi';

export interface ProductProductColor extends Struct.ComponentSchema {
  collectionName: 'components_product_product_colors';
  info: {
    displayName: 'ProductColor';
  };
  attributes: {
    color: Schema.Attribute.String;
    sizes: Schema.Attribute.Component<'product.product-size', true>;
  };
}

export interface ProductProductSize extends Struct.ComponentSchema {
  collectionName: 'components_product_product_sizes';
  info: {
    displayName: 'ProductSize';
  };
  attributes: {
    size: Schema.Attribute.Enumeration<['S', 'M', 'L', 'XL', 'XXL']>;
    stoke: Schema.Attribute.Integer;
  };
}

export interface ProductProductVariant extends Struct.ComponentSchema {
  collectionName: 'components_product_product_variants';
  info: {
    displayName: 'ProductVariant';
  };
  attributes: {
    color: Schema.Attribute.String;
    size: Schema.Attribute.Enumeration<['S', 'M', 'L', 'XL', 'XXL']>;
    stock: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.product-color': ProductProductColor;
      'product.product-size': ProductProductSize;
      'product.product-variant': ProductProductVariant;
    }
  }
}
