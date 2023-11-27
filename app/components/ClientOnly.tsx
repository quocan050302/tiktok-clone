'use client';

import React, { useEffect, useState } from "react";

export default function ClientOnly({ children }: { children: React.ReactNode }) {

  const [isClient, setIsClient] = useState(false)
  // console.log('isClient',isClient)
  useEffect(() => { setIsClient(true) }, [])

  return (<> {isClient ? <div>{children}</div> : null} </>);
};