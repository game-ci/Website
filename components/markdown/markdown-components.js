/* eslint-disable react/prop-types */
import { Divider } from 'antd';
import Blockquote from './components/blockquote';
import CodeBlock from './components/code-block';
import EmbeddedLinkOrParagraph from './components/embedded-link-or-paragraph';
import { List, ListItem } from './components/list';
import HeadingWithAnchor from './components/heading-with-anchor';

export default {
  h1: ({ node, children, ...props }) => (
    <HeadingWithAnchor level={1} {...props}>
      {children}
    </HeadingWithAnchor>
  ),
  h2: ({ node, children, ...props }) => (
    <HeadingWithAnchor level={2} {...props}>
      {children}
    </HeadingWithAnchor>
  ),
  h3: ({ node, children, ...props }) => (
    <HeadingWithAnchor level={3} {...props}>
      {children}
    </HeadingWithAnchor>
  ),
  h4: ({ node, children, ...props }) => (
    <HeadingWithAnchor level={4} {...props}>
      {children}
    </HeadingWithAnchor>
  ),
  h5: ({ node, children, ...props }) => (
    <HeadingWithAnchor level={5} {...props}>
      {children}
    </HeadingWithAnchor>
  ),
  h6: ({ node, children, ...props }) => (
    <HeadingWithAnchor level={6} {...props}>
      {children}
    </HeadingWithAnchor>
  ),
  p: EmbeddedLinkOrParagraph,
  hr: Divider,
  ol: ({ node, children, ...props }) => (
    <List {...props} ordered>
      {children}
    </List>
  ),
  ul: ({ node, children, ...props }) => <List {...props}>{children}</List>,
  li: ListItem,
  code: ({ node, inline, children, ...props }) =>
    inline ? <code {...props}>{children}</code> : <CodeBlock {...props}>{children}</CodeBlock>,
  blockquote: Blockquote,
};
