const roomFilter = {
  filters: [
    {
      id: 1,
      name: "All Room",
      filterData: "filter-item",
    },
    {
      id: 2,
      name: "Luxury",
      filterData: "luxury",
    },
    {
      id: 3,
      name: "Double",
      filterData: "double",
    },
    {
      id: 5,
      name: "Family",
      filterData: "family",
    },
  ],
  projects: [
    { 
      id: 1,
      image: "/img/hotel/rooms/room1/room1_1.jpeg",
      title: "Luxury",
      price: "134",
      class_s: "col-xl-3 col-lg-4 mt-30",
      filter: ["luxury"],
    },
    {
      id: 2,
      image: "/img/hotel/rooms/room5/room5_3.jpeg",
      title: "Double",
      price: "199",
      class_s: "col-xl-6 col-lg-8 mt-30",
      filter: ["double"],
    },
    {
      id: 3,
      image: "/img/hotel/rooms/room4/room4_1.jpeg",
      title: "Family Room",
      price: "319",
      class_s: "col-xl-3 col-lg-4 mt-30",
      filter: ["family"],
    }

  ],
};

export default roomFilter;
