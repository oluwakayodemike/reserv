// src/data/filters.js

export const filters = {
    buy: [
      {
        name: 'propertyType',
        label: 'Property Type',
        options: ['New home', 'Old home', 'Apartment'],
      },
      {
        name: 'rooms',
        label: 'Rooms',
        options: ['1-2 rooms', '3-4 rooms', '5+ rooms'],
      },
      {
        name: 'priceRange',
        label: 'Price Range',
        options: ['$570 000 — 800 000', '$800 000 — 1 000 000', '$1 000 000+'],
      },
    ],
    rent: [
      {
        name: 'propertyType',
        label: 'Property Type',
        options: ['Apartment', 'House', 'Studio'],
      },
      {
        name: 'rooms',
        label: 'Rooms',
        options: ['1 room', '2 rooms', '3 rooms', '4+ rooms'],
      },
      {
        name: 'priceRange',
        label: 'Price Range',
        options: ['$1 000 — 2 000/month', '$2 000 — 3 500/month', '$3 500+/month'],
      },
    ],
    sell: [
      {
        name: 'propertyType',
        label: 'Property Type',
        options: ['House', 'Land', 'Commercial Property'],
      },
      {
        name: 'rooms',
        label: 'Rooms',
        options: ['1-2 rooms', '3-4 rooms', '5+ rooms'],
      },
      {
        name: 'priceRange',
        label: 'Price Range',
        options: ['$500 000 — 700 000', '$700 000 — 1 000 000', '$1 000 000+'],
      },
    ],
    realtor: [
      {
        name: 'serviceType',
        label: 'Service Type',
        options: ['Property Management', 'Real Estate Consulting', 'Property Valuation'],
      },
      {
        name: 'location',
        label: 'Location',
        options: ['New York', 'Los Angeles', 'Miami', 'Chicago'],
      },
      {
        name: 'budget',
        label: 'Budget Range',
        options: ['$1 000 — 5 000', '$5 000 — 10 000', '$10 000+'],
      },
    ],
  };
  