import Social from '@/app/socials/page';
import Link from 'next/link';
import React from 'react';


const SideBar = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <div className={`header__area-menubar-right-sidebar-popup three ${isOpen ? 'active' : ''}`}>
                            <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}><i className="fal fa-times"></i></div>
                            <div className="header__area-menubar-right-sidebar-popup-logo">
							<Link href="/"><img src="/logo-1.png" alt="logo" /></Link>
                            </div>
                            <p>Morbi et tellus imperdiet, aliquam nulla sed, dapibus erat. Aenean dapibus sem non purus venenatis vulputate. Donec accumsan eleifend blandit. Nullam auctor ligula</p>
							<div className="header__area-menubar-right-box-sidebar-popup-image">
								<img src="/img/bar.jpg" alt="" />
							</div>
							<div className="header__area-menubar-right-box-sidebar-popup-contact">
								<h4 className="mb-30">Contact Info</h4>
								<div className="header__area-menubar-right-box-sidebar-popup-contact-item">
									<div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
										<i className="fal fa-phone-alt"></i>
									</div>
									<div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
										<span>Call Now</span>
										<h6><Link href="tel:+94(76) 170 6172">+94(76) 170 6172</Link></h6>
										<h6><Link href="tel:+94(76) 733 6176">+94(76) 733 6176</Link></h6>
									</div>
								</div>
								<div className="header__area-menubar-right-box-sidebar-popup-contact-item">
									<div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
										<i className="fal fa-envelope"></i>
									</div>
									<div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
										<span>Quick Email</span>
										<h6><Link href="mailto:rangiriviewresort@gmail.com">rangiriviewresort@gmail.com</Link></h6>
									</div>
								</div>
								<div className="header__area-menubar-right-box-sidebar-popup-contact-item">
									<div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
										<i className="fal fa-map-marker-alt"></i>
									</div>
									<div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
										<span>Office Address</span>
										<h6><Link href="https://www.google.com/maps">Rathmalghaela Road, Temple Junction, Dambulla</Link></h6>
									</div>
								</div>
							</div>
							<div className="header__area-menubar-right-box-sidebar-popup-social">
								<Social />							
							</div>
                        </div>
            <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
        </>
    );
};

export default SideBar;