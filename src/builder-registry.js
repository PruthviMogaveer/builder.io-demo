import { Builder } from "@builder.io/react";
import BuilderPage from "./components/figma-imports";
import ContactBuilder from "./components/Contact-builder";

Builder.registerComponent(BuilderPage, {
  name: "BuilderPage",
});

Builder.registerComponent(ContactBuilder, {
  name: "ContactBuilder",
});
