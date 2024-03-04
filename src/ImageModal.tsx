import React, { useEffect, useRef, useState } from "react";

interface IProps {
  src: string;
}

const img = (() => {
  const img = new Image();
  img.src =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
  return img;
})();

export const ImageModal = ({ src }: IProps): React.ReactElement => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [w, setW] = useState(0);
  const [h, setH] = useState(0);
  const onDrag = (event: React.DragEvent<HTMLImageElement>) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLImageElement>) => {
    event.dataTransfer.setDragImage(img, 0, 0);
  };

  useEffect(() => {
    setW(imageRef?.current?.width ?? 0);
    setH(imageRef?.current?.height ?? 0);
  }, [imageRef]);
  return (
    <div
      style={{
        position: "absolute",
        width: w,
        height: h,
        top: (window.innerWidth - w) / 2,
        left: (window.innerHeight - h) / 2,
      }}
    >
      <img
        ref={imageRef}
        style={{ userSelect: "none" }}
        src={src}
        alt=""
        onDrag={onDrag}
        onDragStart={onDragStart}
      />
      <div
        style={{
          width: "150px",
          height: "150px",
          borderStyle: "dashed",
          borderColor: "#888",
          borderWidth: "10px",
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      ></div>
    </div>
  );
};
