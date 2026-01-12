import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
}

export const SEO = ({
    title,
    description = "Join India's flagship civic internship program. Work with the Indore Municipal Corporation across 12 departments and gain hands-on experience in urban governance.",
    keywords = "IWM, Internship with Mayor, Indore Municipal Corporation, civic internship, government internship, urban governance, Indore",
    image = "/iwm-logo.png",
    url = "https://iwmindore.gov.in",
    type = 'website'
}: SEOProps) => {
    const siteTitle = "IWM Portal - Internship with Mayor, Indore";
    const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

    // JSON-LD Structured Data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "GovernmentOrganization",
        "name": "Indore Municipal Corporation",
        "url": "https://iwmindore.gov.in",
        "logo": "https://iwmindore.gov.in/iwm-logo.png",
        "sameAs": [
            "https://www.facebook.com/IndoreMunicipalCorporation",
            "https://twitter.com/IndoreMunicipal",
            "https://www.instagram.com/internshipwithmayor.indore/"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-88396-35194",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["en", "hi"]
        }
    };

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};
