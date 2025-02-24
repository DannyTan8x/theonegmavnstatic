import React, { createContext, useContext, useState } from "react";

interface ScrollContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  sectionIndex: number;
  setSectionIndex: (index: number) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [sectionIndex, setSectionIndex] = useState<number>(0);

  return (
    <ScrollContext.Provider
      value={{ activeSection, setActiveSection, sectionIndex, setSectionIndex }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
