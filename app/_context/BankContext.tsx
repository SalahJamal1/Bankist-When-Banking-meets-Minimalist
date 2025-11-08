'use client';
import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface ICONTEXT {
  visible: boolean;

  handelVisible: () => void;
  openMenu: boolean;
  handelMenu: () => void;
}

const BankProvider = createContext<null | ICONTEXT>(null);

type Props = {
  children: Readonly<ReactNode>;
};

export default function BankContext({ children }: Props) {
  const [visible, setVisible] = useState<boolean>(false);

  const [openMenu, setOpen] = useState<boolean>(false);
  const handelMenu = () => {
    setOpen(!openMenu);
  };
  const handelVisible = () => {
    setVisible(!visible);
  };
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const listener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setVisible(false);
        setOpen(false);
      }
    };
    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    if (!sections) return;
    const observer = (
      [e]: IntersectionObserverEntry[],
      observe: IntersectionObserver
    ) => {
      if (!e.isIntersecting) return;
      e.target.classList.remove('section--hidden');
      observe.unobserve(e.target);
    };

    const handelObserver = new IntersectionObserver(observer, {
      root: null,
      threshold: 0.15,
    });

    sections.forEach(section => {
      const offest = section.getBoundingClientRect();
      if (offest.bottom > 0 && offest.top < window.innerHeight) return;
      section.classList.add('section--hidden');
      handelObserver.observe(section);
    });

    return () => handelObserver.disconnect();
  }, []);

  return (
    <BankProvider.Provider
      value={{ visible, handelVisible, openMenu, handelMenu }}
    >
      {children}
    </BankProvider.Provider>
  );
}

export function useBank(): ICONTEXT {
  const context = useContext(BankProvider);
  if (context === null || context === undefined)
    throw new Error('Filed to load context');
  return context;
}
