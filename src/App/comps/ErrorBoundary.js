/**
 * 为该应用定制的 React 错误边界组件。参考 https://reactjs.org/docs/error-boundaries.html
 * 伸展型组件
 */

import React from "react";
import { Button } from "antd-mobile";

import sadImg from "../images/sad.png";
import ImageCaption from "./ImageCaption";
import defineTranslation from "../defineTranslation";

const { Translation } = defineTranslation(__filename, {
  en: {
    retry: "Retry"
  },
  zh: {
    retry: "重试"
  }
});

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info) {
    console.error(error);
  }

  retry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ImageCaption
          src={sadImg}
          alt="error occurred"
          caption={
            <p>
              <Button inline size="small" type="ghost" onClick={this.retry}>
                <Translation>{t => t("retry")}</Translation>
              </Button>
            </p>
          }
        />
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
