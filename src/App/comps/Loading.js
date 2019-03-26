/**
 * 用于各种占位的 Loading 组件
 * 伸展型组件
 */

/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Icon } from "antd-mobile";

const Loading = () => {
  return (
    <div
      css={{
        display: "flex",
        width: "100%",
        height: "100%"
      }}
    >
      <Icon
        css={{
          margin: "auto"
        }}
        type="loading"
        size="lg"
      />
    </div>
  );
};

export default Loading;
