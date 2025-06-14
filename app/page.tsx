"use client";

import { use, useCallback, useEffect, useRef, useState } from "react";
import Button from "./Button";

export default function Home() {
  const [active, setActive] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [animating, isAnimating] = useState<boolean>(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    drawerRef.current?.addEventListener("animationcancel", () => {
      isAnimating(false);
    });
    drawerRef.current?.addEventListener("animationend", () => {
      isAnimating(false);
    });
  }, [drawerRef.current]);

  return (
    <>
      <h1></h1>
      <Button isActive={active} onClick={() => setActive(!active)}>
        First
      </Button>
      <button
        onClick={() => {
          setOpen(!open);
          isAnimating(true);
        }}
      >
        toggle drawer
      </button>
      <input
        type="text"
        name=""
        id=""
        className="search-input"
        placeholder="search..."
      />
      {open || animating ? (
        <div
          ref={drawerRef}
          className={`drawer ${open ? "slide-in open" : "slide-out"}`}
        >
          ...Drawer open
        </div>
      ) : null}
    </>
  );
}
