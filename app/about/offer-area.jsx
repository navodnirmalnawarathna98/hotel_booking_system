"use client";
import Image from "next/image";
import Offers from "../../public/img/hotel/rooms/room3/room3_1.jpeg";

const Offerarea = () => {
  return (
    <>
      <div className="offers__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-title">
                <span className="subtitle__one">About Us</span>
                <h2>Who We Are</h2>
                <p>
                Nestled in the heart of Dambulla, IMA - Rangiri View Resort offers a serene escape surrounded by lush greenery and breathtaking views of the Rangiri Dambulla Rock. Our resort is designed to provide guests with an authentic Sri Lankan experience, combining modern comforts with traditional hospitality. Whether you are here to explore the ancient cultural sites, relax in the peaceful ambiance, or enjoy our world-class amenities, Rangiri View Resort is your perfect getaway. Our commitment to excellence ensures that every stay is memorable, making us the ideal choice for travelers seeking tranquility and adventure in equal measure.

                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-image">
                <Image alt="" layout="responsive" objectFit="cover" src={Offers} height={50} style={{ height: '50px'}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offerarea;
