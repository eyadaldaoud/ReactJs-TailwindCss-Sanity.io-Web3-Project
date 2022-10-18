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
        validation: Rule => Rule.required(),
        options: {
            hotspot: true,
        }
    },
 
      {
        name: 'price',
        type: 'number',
        title: 'Product Price',
        validation: Rule => Rule.required().min(1).max(10000),
      },

     
    ]
  }