import Link from "next/link";
import { Fragment } from "react";
export const Home = () => (
    <Fragment>
        <li><Link href="/">Home 01</Link></li>
    </Fragment>
);
export const Page = () => (
    <Fragment>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services-details">Services Details</Link></li>
    </Fragment>
);
export const Room = () => (
    <Fragment>
        <li><Link href="/room-style">Room Style</Link></li>
      
    </Fragment>
);
export const Blog = () => (
    <Fragment>
        <li><Link href="/blog-grid">Blog Grid</Link></li>
        <li><Link href="/blog-standard">Blog Standard</Link></li>
        <li><Link href="/blog-details/1">Blog Details</Link></li>
    </Fragment>
);