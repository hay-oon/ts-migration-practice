import { useState, useEffect } from "react";

interface PageSizes {
  mobile: number;
  tablet: number;
  desktop: number;
}

function useResponsivePageSize(
  sizes: PageSizes = { mobile: 1, tablet: 2, desktop: 4 }
): number {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout; // setTimeout 타입 지정

    const handleResize = (): void => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 300);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  if (windowWidth <= 768) {
    return sizes.mobile;
  } else if (windowWidth <= 1024) {
    return sizes.tablet;
  } else {
    return sizes.desktop;
  }
}

export default useResponsivePageSize;
