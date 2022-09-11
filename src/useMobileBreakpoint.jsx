import { useEffect, useState } from 'react';

export const useMobileBreakpoint = () => {
  const BREAKPOINT = 576;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= BREAKPOINT);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(`(max-width: ${BREAKPOINT}px)`);

    function handleOrientationChange({ matches }) {
      if (matches && !isMobile) setIsMobile(true);
      else if (!matches && isMobile) setIsMobile(false);
    }

    mediaQueryList.addEventListener('change', handleOrientationChange);
    return () => {
      window.removeEventListener('change', handleOrientationChange);
    };
  }, [isMobile]);

  return { isMobile };
};
