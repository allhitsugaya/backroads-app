import ImageTour1 from '../images/tour-1.jpeg'
import ImageTour2 from '../images/tour-2.jpeg'
import ImageTour3 from '../images/tour-3.jpeg'
import ImageTour4 from '../images/tour-4.jpeg'

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'home',
  },
  {
    id: 2,
    href: '#about',
    text: 'about',
  },
  {
    id: 3,
    href: '#services',
    text: 'services',
  },
  {
    id: 4,
    href: '#tours',
    text: 'tours',
  }
];
export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];
export const services = [
  {id: 1, icon:'fas fa-wallet fa-fw', title:'saving money', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' + ' Asperiores, officia.'},
  {id: 2, icon:'fas fa-tree fa-fw', title:'endless hiking', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' + ' Asperiores, officia.'},
  {id: 3, icon:'fas fa-socks fa-fw', title:'amazing comfort', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' + ' Asperiores, officia.'}
];
export const cards = [
  {id: 1, date:'august 26th, 2020', title:'Tibet Adventure' , text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n' + 'vitae tempore voluptatum maxime reprehenderit eum quod\n' + 'exercitationem fugit, qui corporis.', img:ImageTour1, location: 'china', duration: "6 days", payment:"from $2100"},
  {id: 2, date:'october 1th, 2020', title:'best of java' , text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n' + 'vitae tempore voluptatum maxime reprehenderit eum quod\n' + 'exercitationem fugit, qui corporis.', img:ImageTour2, location: 'indonesia', duration: "11 days", payment:"from $1400"},
  {id: 3, date:'september 15th, 2020', title:'explore hong kong' , text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n' + 'vitae tempore voluptatum maxime reprehenderit eum quod\n' + 'exercitationem fugit, qui corporis.', img:ImageTour3, location: 'hong kong', duration: "8 days", payment:"from $5000"},
  {id: 4, date:'december 5th, 2019', title:'kenya highlights' , text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n' + 'vitae tempore voluptatum maxime reprehenderit eum quod\n' + 'exercitationem fugit, qui corporis.', img:ImageTour4, location: 'kenya', duration: "20 days", payment:"from $3300"}
]
