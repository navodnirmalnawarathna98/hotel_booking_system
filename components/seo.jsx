"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
    useEffect(() => {
        document.title = pageTitle + ' - IMA - Luxury Hotel in Dambulla';
    }, []);
};

export default SEO;
