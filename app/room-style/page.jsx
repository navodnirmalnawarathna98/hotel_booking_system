"use client";

import { useEffect, useState } from "react";

import roomStyleAllBlogs from "@/components/data/room-style-all-blogs";
import Image from "next/image";
import Footer from "../footer/footer";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Link from "next/link";
import Sidebar from "../room-details/sidebar";
import HeaderOne from "../header/HeaderOne";
import SEO from "@/components/seo";


const Roomstyle = () => {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
        try {
            const response = await fetch('/api/rooms');
            const data = await response.json();
            setRooms(data);
        } catch (error) {
            console.error('Error fetching rooms:', error);
        }
    };

    fetchRooms();
}, []);



  return (
    <>
      <SEO pageTitle="Room Style" />
        <HeaderOne />
        <BreadCrumb title="Room Style" innerTitle="Room Style" bgImage="img/hotel/rooms/room1/room1-3.jpeg"/>
        <div className="room__area section-padding">
          <div className="container">
            <div className="row">
              <Sidebar />
              <div className="col-xl-9 col-lg-8 order-first order-lg-1 lg-mb-30">
                <div className="row justify-content-center">
                  {rooms.map((item, index) => (
                    <div key={index} className="col-xl-4 col-md-6 mb-30">
                      <div className="deluxe__two-item">
                        <div className="deluxe__two-item-image">
                          <Link href="/room-details">
                            <Image
                               src={`data:image/png;base64,${item.mainImage}`}
                              alt={item.roomType}
                              width={500}
                              height={500}
                            />
                          </Link>
                        </div>
                        <div className="deluxe__two-item-content">
                          <span>Rs.{item.price}/AC-with breakfast</span>
                          <span>Rs.{item.price}/Non-AC-with breakfast</span>
                          <h4>
                            <Link href="/room-details">{item.roomType}</Link>
                          </h4>
                          <p>{item.longDesc}</p>
                          <div className="deluxe__two-item-content-meta">
                            <ul>
                              <li>
                                <i className="fal fa-bed-alt"></i> ({item.bedCount})
                                bed's
                              </li>
                              <li>
                                <i className="fal fa-users"></i> ({item.guestCount})
                                Guest's
                              </li>
                            </ul>
                          </div>
                          <div className="deluxe__two-item-content-bottom">
                            <Link className="simple-btn" href="/room-details">
                              <i className="far fa-chevron-right"></i> Read More
                            </Link>
                            <p>
                              <i className="fas fa-star"></i>
                              <span>
                                {/* {item.star} */}
                                </span>2k
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default Roomstyle;
