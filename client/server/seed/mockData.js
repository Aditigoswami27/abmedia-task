import Destination from '../models/destination.js';
import Package from '../models/package.js';

const seedData = async () => {
  await Destination.deleteMany();
  await Package.deleteMany();

  //mock data
  await Destination.insertMany([
    {
      name: "Goa",
      price: 4999,
      image: "https://plus.unsplash.com/premium_photo-1671358446946-8bd43ba08a6a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Kerala",
      price: 4999,
      image: "https://images.unsplash.com/photo-1589428757587-47d6c19fef3a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Himachal Pradesh",
      price: 4999,
      image: "https://plus.unsplash.com/premium_photo-1661905692737-e075ebc940e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Jammu & Kashmir",
      price: 4999,
      image: "https://images.unsplash.com/photo-1707127930905-0dc93069bb0b?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Assam",
      price: 4999,
      image: "https://images.unsplash.com/photo-1615472910606-9d4f7291944f?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Maharashtra",
      price: 4999,
      image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Rajasthan",
      price: 5499,
      image: "https://images.unsplash.com/photo-1614181081801-f241632a4d49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Uttarakhand",
      price: 4799,
      image: "https://images.unsplash.com/photo-1547378809-db8f9515a63b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]);

  await Package.insertMany([
    {
      title: "Golden Temple Tour",
      price: 8999,
      image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Trip to Goa",
      price: 7999,
      image: "https://plus.unsplash.com/premium_photo-1671358446946-8bd43ba08a6a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Amazing Kerala",
      price: 6999,
      image: "https://images.unsplash.com/photo-1589428757587-47d6c19fef3a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Rajasthan Heritage Tour",
      price: 9999,
      image: "https://images.unsplash.com/photo-1614181081801-f241632a4d49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Sikkim Nature Trail",
      price: 8499,
      image: "https://images.unsplash.com/photo-1634400001131-d04275db2076?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "North East Explorer",
      price: 8999,
      image: "https://images.unsplash.com/photo-1521437620269-f477f5437820?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Backwaters of Kerala",
      price: 7499,
      image: "https://images.unsplash.com/photo-1668521801976-abd776daaa51?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Leh-Ladakh Road Trip",
      price: 10999,
      image: "https://images.unsplash.com/photo-1536295243470-d7cba4efab7b?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]);

  console.log("✅ Mock data seeded.");
};

export default seedData;
