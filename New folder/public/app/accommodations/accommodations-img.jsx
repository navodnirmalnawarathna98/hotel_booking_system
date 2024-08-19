import hotel1 from "@/public/img/hotel/rooms/room1/room1-3.jpeg";
import hotel2 from "@/public/img/hotel/rooms/room1/room1-6.jpeg";
import Image from "next/image";

const Accommodationsimg = () => {
  return (
    <div className="col-xl-7 col-lg-6">
      <div className="accommodations__area-right">
        <div className="accommodations__area-right-image">
          <Image src={hotel1} alt="" width={500} height={250} />
          <div className="accommodations__area-right-image-two">
            <Image src={hotel2} alt="" width={300} height={150} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodationsimg;
