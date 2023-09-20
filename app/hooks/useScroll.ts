'use client';

import { useRouter, usePathname } from 'next/navigation';

const useScrollToSection = () => {
  const router = useRouter();
  const location = usePathname();

  const scrollToSection = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    if (location !== '/') router.push('/');

    if (!targetSection || typeof window === 'undefined') return;
    const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - 96;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  };

  return scrollToSection;
};

export default useScrollToSection;
