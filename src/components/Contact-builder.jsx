import React from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import "../builder-registry";

// Builder Public API Key set in .env file
builder.init("1cdec52d24f149be98b3ae2858b21f51");

export default function ContactBuilder() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = React.useState(false);
  const [content, setContent] = React.useState(null);

  // get the page content from Builder
  React.useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get("figma-imports", {
          url: window.location.pathname,
        })
        .promise();

      setContent(content);
      setNotFound(!content);

      // if the page title is found,
      // set the document title
      if (content?.data.title) {
        document.title = content.data.title;
      }
    }
    fetchContent();
  }, []);

  if (content === null) {
    return;
  }
  // If no page is found, return
  // a 404 page from your code.
  if (notFound && !isPreviewingInBuilder) {
    return <div>404 Page Not Found</div>;
  }

  // return the page when found
  return (
    <>
      {/* Render the Builder page */}
      <BuilderComponent model="Contact us - Untitled" content={content} />
    </>
  );
}
