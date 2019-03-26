/**
 * 顶级布局组件，撑满整个屏幕。
 *
 * 由于现代布局（基于 flexbox）需要外部元素是非收缩的，而浏览器默认的 body、root div 的都是在纵向收缩的，不便于布局。
 * 该组件正是为了解决这一问题而被创建。
 *
 * 相较于直接设置 body 样式等方案，使用该组件，更具有移植性，而且可以按需组合式地提供功能，避免了太多全局隐式设置。
 *
 * 按设计，该组件倾向于在页面级别使用。如果能够预测所有页面都需要使用该组件，则可以将该组件使用于应用级别。
 */

import styled from "@emotion/styled";

const Viewport = styled.div({
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflow: "auto"
});

export default Viewport;
