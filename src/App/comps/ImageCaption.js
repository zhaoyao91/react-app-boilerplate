/**
 * 响应式图片加标题
 * 伸展型组件
 * 标题在图片正下方，均居中显示
 */

/** @jsx jsx */
import { jsx } from "@emotion/core";

function ImageCaption({ src, alt, caption }) {
  if (typeof caption === "string") {
    caption = <p>{caption}</p>;
  }

  return (
    <div
      css={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        css={{
          minHeight: 0,
          width: "100%"
        }}
      >
        <img
          css={{
            display: "block",
            width: "100%",
            maxHeight: "100%",
            objectFit: "contain"
          }}
          src={src}
          alt={alt}
        />
      </div>
      <div>{caption}</div>
    </div>
  );
}

export default ImageCaption;
