import Image from "next/image";
import React from "react";

function Social() {
  return (
    <div className="flex">
      <a href={process.env.NEXT_PUBLIC_FACEBOOK_URL}>
        <Image src="/img/facebook.png" alt="Facebook" width="48" height="48" />
      </a>
      <a href={process.env.NEXT_PUBLIC_TWITTER_URL}>
        <Image src="/img/twitter.png" alt="Twitter" width="48" height="48" />
      </a>
      <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL}>
        <Image src="/img/linkedin.png" alt="LinkedIn" width="48" height="48" />
      </a>
    </div>
  );
}

export default Social;
