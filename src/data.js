  export const prices = {
    '250g': { 'Every week': 7.2, 'Every 2 weeks': 9.6, 'Every month': 12.0 },
    '500g': { 'Every week': 13.0, 'Every 2 weeks': 17.5, 'Every month': 22.0 },
    '1000g': { 'Every week': 22.0, 'Every 2 weeks': 32.0, 'Every month': 42.0 }
  };

  export const coffeeItems = [
    { key: 'preferences', number: '01', name: 'Preferences' },
    { key: 'beantype', number: '02', name: 'Bean type' },
    { key: 'quantity', number: '03', name: 'Quantity' },
    { key: 'grindoption', number: '04', name: 'Grind option' },
    { key: 'deliveries', number: '05', name: 'Deliveries' }
  ];

  export const coffeeChoices = [
    {
      key: 'preferences',
      mappedKey: 'drink',
      title: 'How do you drink your coffee?',
      options: [
        { key: 'Capsule', title: 'Capsule', description: 'Compatible with Nespresso systems and similar brewers' },
        { key: 'Filter', title: 'Filter', description: 'For pour over or drip methods like Aeropress, Chemex, and V60' },
        { key: 'Espresso', title: 'Espresso', description: 'Dense and finely ground beans for an intense, flavorful experience' }
      ]
    },
    {
      key: 'beantype',
      mappedKey: 'bean',
      title: 'What type of coffee?',
      options: [
        { key: 'Single origin', title: 'Single origin', description: 'Distinct, high quality coffee from a specific family-owned farm' },
        { key: 'Decaf', title: 'Decaf', description: 'Just like regular coffee, except the caffeine has been removed' },
        { key: 'Blended', title: 'Blended', description: 'Combination of two or three dark roasted beans of organic coffees' }
      ]
    },
    {
      key: 'quantity',
      mappedKey: 'quantity',
      title: 'How much would you like?',
      options: [
        { key: '250g', title: '250g', description: 'Perfect for the solo drinker. Yields about 12 delicious cups' },
        { key: '500g', title: '500g', description: 'Perfect option for a couple. Yields about 40 delectable cups' },
        { key: '1000g', title: '1000g', description: 'Perfect for offices and events. Yields about 90 delightful cups' }
      ]
    },
    {
      key: 'grindoption',
      mappedKey: 'grind',
      title: 'Want us to grind them?',
      options: [
        { key: 'Wholebean', title: 'Wholebean', description: 'Best choice if you cherish the full sensory experience' },
        { key: 'Filter', title: 'Filter', description: 'For drip or pour-over coffee methods such as V60 or Aeropress' },
        { key: 'Cafetière', title: 'Cafetière', description: 'Coarse ground beans specially suited for French press coffee' }
      ]
    },
    {
      key: 'deliveries',
      mappedKey: 'delivery',
      title: 'How often should we deliver?',
      options: [
        { key: 'Every week', title: 'Every week', description: 'Includes free first-class shipping' },
        { key: 'Every 2 weeks', title: 'Every 2 weeks', description: 'Includes free priority shipping' },
        { key: 'Every month', title: 'Every month', description: 'Includes free priority shipping' }
      ]
    }
  ];