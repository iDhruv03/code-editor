"use client";

import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { useRef, useState } from "react";


function ThemeSelector () {
  const[isOpen, setIsOpen] = useState(false);
  const{theme,setTheme }= useCodeEditorStore();
  const dropdownRef = useRef<HTMLDivElement>(null);
  return <div>ThemeSelector</div>
}
export default ThemeSelector;