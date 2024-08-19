import SEO from "@/components/seo";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import HeaderOne from "../header/HeaderOne";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import Roomlistblogs from "./room-list-blogs";

const Roomlist = () => {
  return (
    <>
      <SEO pageTitle='Room List' />
        <HeaderOne />
        <BreadCrumb title='Room List' innerTitle='Room List' bgImage='img/hotel/rooms/room1/room1-2.jpeg' />
        <Roomlistblogs />
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default Roomlist;
