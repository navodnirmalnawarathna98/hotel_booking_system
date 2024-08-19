"use client";

const galleryData = {
  galleryImage: [
    { image: "img/hotel/rooms/room4/room4_1.jpeg" },
    { image: "img/hotel/rooms/room5/room5-1.jpeg" },
    { image: "img/hotel/rooms/room2/room2_1.jpeg" },
    { image: "img/hotel/rooms/room1/room1_1.jpeg" },
  ],
};

const { galleryImage } = galleryData;

const Gallery = () => {
  return (
    <>
      <div className="gallery__area section-padding pb-0 overflow-hidden">
        <div className="container-fluid p-0">
          <div className="row">
            {galleryImage.map((item, index) => (
              <div key={index} className="col-sm-3 sm-mb-10">
                <div className="gallery__area-item">
                  <img className="w-100" src={item.image} alt="image" />
                </div>
              </div>
            ))}
          </div> 
          <br />
        </div>
      </div>
    </>
  );
};

export default Gallery;
