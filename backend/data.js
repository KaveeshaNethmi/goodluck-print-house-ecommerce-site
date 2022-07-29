import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('goodluckAdmin'),
      isAdmin: true,
    },
    {
      name: 'Kaveesha Nethmi',
      email: 'kaveesha.nethmi1@gmail.com',
      password: bcrypt.hashSync('kna924'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Bill Books',
      slug: 'bill-books',
      category: 'Offset Printing',
      image: '/images/p1.jpg',
      price: 200,
      type: 'With Carbon Paper',
      rating: 4.5,
      numReviews: 10,
      description: 'High Quality',
    },
    {
      //_id: '2',
      name: 'Posters',
      slug: 'posters',
      category: 'Digital Printing',
      image: '/images/p2.jpg',
      price: 300,
      type: 'One Color',
      rating: 4.5,
      numReviews: 10,
      description: 'High Quality',
    },
    {
      //_id: '3',
      name: 'Mug Printing',
      slug: 'mug-printing',
      category: '',
      image: '/images/p3.jpg',
      price: 500,
      type: '',
      rating: 4.5,
      numReviews: 10,
      description: 'High Quality',
    },
    {
      //_id: '4',
      name: 'Invitation Cards',
      slug: 'invitation-cards',
      category: 'Invitation Cards',
      image: '/images/p4.jpg',
      price: 200,
      type: 'Wedding Invitation Cards',
      rating: 4.5,
      numReviews: 10,
      description: 'High Quality',
    },
  ],
};

export default data;
