import { DocsLayout, DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";

import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";

import Pattern from "./Pattern";

const doscOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  sidebar: {
    tabs: {
      transform(option, node) {
        const meta = source.getNodeMeta(node);
        if (!meta || !node.icon) return option;

        const color = `var(--${meta.path.split("/")[0]}-color, var(--color-fd-foreground))`;

        return {
          ...option,
          icon: (
            <div
              className="[&_svg]:size-4 flex items-center justify-center rounded-lg size-full text-(--tab-color) max-md:bg-(--tab-color)/10 max-md:border max-md:p-1.5"
              style={
                {
                  "--tab-color": color,
                } as object
              }
            >
              {node.icon}
            </div>
          ),
        };
      },
    },
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...doscOptions}>
      <Pattern />
      {children}
    </DocsLayout>
  );
}
