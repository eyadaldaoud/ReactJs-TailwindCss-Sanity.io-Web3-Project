export default {
    name: 'product',
    type: 'document',
      title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: Rule => Rule.required().min(5).max(20),
          },
  
      {
        name: 'mainImage',
        type: 'image',
        title: 'Image Field',
        validation: Rule => Rule.required(),
        options: {

            hotspot: true,
        }
      },
      {
        name: 'des',
        type: 'string',
        title: 'Description',
        validation: Rule => Rule.required().max(300),
        
      },
      {
        name: 'author',
        type: 'string',
        title: 'Author',
        validation: Rule => Rule.required().max(11)
      },
      {
        name: 'authimg',
        type: 'image',
        title: 'Author Image',
 
        options: {
            hotspot: true,
        }
    },
    {
      name: 'authlink',
      type: 'string',
      title: 'Author Link',

    },
    {
      name: 'productlink',
      type: 'string',
      title: 'Product Link',
      
    },
 
      {
        name: 'price',
        type: 'number',
        title: 'Product Price',
        validation: Rule => Rule.required().min(0).max(10000),
      },

     
    ]
  }