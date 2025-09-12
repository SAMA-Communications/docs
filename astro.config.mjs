import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";
import starlightCoolerCredit from "starlight-cooler-credit";

export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightThemeRapide(),
        starlightCoolerCredit({
          customImage: "./src/assets/sama-credit-snake.svg",
          customImageAlt: "BuyMeACoffee",
          credit: {
            href: "https://buymeacoffee.com/khomenkoigor",
            title: { en: "Enjoying SAMA API?" },
            description: { en: "Support us with a small or big donation!" },
          },
        }),
      ],
      title: "SAMA chat server",
      favicon: "/favicon.ico",
      customCss: ["./src/styles/custom.css"],
      logo: {
        light: "./src/assets/header-sama-light.svg",
        dark: "./src/assets/header-sama-dark.svg",
        replacesTitle: true,
      },
      components: {
        SocialIcons: "./src/components/CustomSocialIcons.astro",
        Header: "./src/components/CustomHeader.astro",
      },
      social: [
        {
          icon: "comment",
          label: "Medium",
          href: "https://medium.com/sama-communications",
        },
        {
          icon: "npm",
          label: "NPM",
          href: "https://www.npmjs.com/package/@sama-communications/sdk",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/ye68KMgA2f",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/SAMA-Communications/sama-server",
        },
      ],
      sidebar: [
        {
          label: "Home",
          link: "/",
          attrs: {
            style:
              "font-size: var(--sl-text-base); font-weight: 600; color: var(--sl-color-white);",
          },
        },
        {
          label: "Overview",
          items: [
            { label: "Introduction", link: "/overview/introduction/" },
            { label: "Quick Start", link: "/overview/quick-start/" },
            { label: "Roadmap", link: "/overview/roadmap/" },
            { label: "Contributing", link: "/overview/contributing/" },
            { label: "FAQ", link: "/overview/faq/" },
          ],
        },
        {
          label: "Deployment",
          items: [
            {
              label: "Manual Setup",
              link: "/deployment/manual-server-setup/",
            },
            {
              label: "Docker",
              link: "/deployment/docker-server-setup/",
            },
          ],
        },
        { label: "SDK", items: [{ link: "/sdk/js/", label: "JS SDK" }] },
        {
          label: "API",
          items: [
            {
              label: "Introduction",
              items: [
                { label: "Introduction", link: "/api/wss/introduction/" },
                { label: "Data Models", link: "/api/wss/data-models/" },
              ],
            },

            {
              label: "User",
              collapsed: true,
              items: [
                { label: "Create", link: "/api/wss/user/create/" },
                { label: "Login", link: "/api/wss/user/login/" },
                { label: "Logout", link: "/api/wss/user/logout/" },
                { label: "Edit", link: "/api/wss/user/edit/" },
                { label: "Delete", link: "/api/wss/user/delete/" },
                { label: "Search", link: "/api/wss/user/search/" },
                { label: "Get by IDs", link: "/api/wss/user/get-by-ids/" },
              ],
            },
            {
              label: "Address Book",
              collapsed: true,
              items: [
                { label: "Add", link: "/api/wss/address-book/add/" },
                {
                  label: "Batch Add",
                  link: "/api/wss/address-book/batch-add/",
                },
                { label: "Update", link: "/api/wss/address-book/update/" },
                { label: "List", link: "/api/wss/address-book/list/" },
                { label: "Delete", link: "/api/wss/address-book/delete/" },
              ],
            },
            {
              label: "Conversation",
              collapsed: true,
              items: [
                { label: "Create", link: "/api/wss/conversation/create/" },
                { label: "Edit", link: "/api/wss/conversation/edit/" },
                {
                  label: "Subscribe",
                  link: "/api/wss/conversation/subscribe/",
                },
                {
                  label: "Unsubscribe",
                  link: "/api/wss/conversation/unsubscribe/",
                },
                { label: "Delete", link: "/api/wss/conversation/delete/" },
                { label: "List", link: "/api/wss/conversation/list/" },
                {
                  label: "Participants List",
                  link: "/api/wss/conversation/participants-list/",
                },
                { label: "Search", link: "/api/wss/conversation/search/" },
              ],
            },
            {
              label: "Conversation Handler",
              collapsed: true,
              items: [
                {
                  label: "Create",
                  link: "/api/wss/conversation-handler/create/",
                },
                { label: "Get", link: "/api/wss/conversation-handler/get/" },
                {
                  label: "Delete",
                  link: "/api/wss/conversation-handler/delete/",
                },
              ],
            },
            {
              label: "Message",
              collapsed: true,
              items: [
                {
                  label: "Send & Receive",
                  link: "/api/wss/message/send-receive/",
                },
                {
                  label: "System Message",
                  link: "/api/wss/message/system-message/",
                },
                { label: "List", link: "/api/wss/message/list/" },
                { label: "Read", link: "/api/wss/message/read/" },
                { label: "Typing", link: "/api/wss/message/typing/" },
                { label: "Delete", link: "/api/wss/message/delete/" },
                { label: "Edit", link: "/api/wss/message/edit/" },
                {
                  label: "Update Reaction",
                  link: "/api/wss/message/update-reaction/",
                },
                {
                  label: "List Reaction",
                  link: "/api/wss/message/list-reaction/",
                },
              ],
            },
            {
              label: "Push Notifications",
              collapsed: true,
              items: [
                {
                  label: "Create Subscription",
                  link: "/api/wss/push-notifications/create/",
                },
                {
                  label: "List Subscriptions",
                  link: "/api/wss/push-notifications/list/",
                },
                {
                  label: "Delete Subscription",
                  link: "/api/wss/push-notifications/delete/",
                },
                {
                  label: "Send Push",
                  link: "/api/wss/push-notifications/push-event/",
                },
              ],
            },
            {
              label: "Carbons",
              collapsed: true,
              items: [
                {
                  label: "Overview",
                  link: "/api/wss/carbons/overview",
                },
              ],
            },
            {
              label: "Last Activity",
              collapsed: true,
              items: [
                {
                  label: "Get User Activity",
                  link: "/api/wss/last-activity/get-by-ids/",
                },
                {
                  label: "Subscribe",
                  link: "/api/wss/last-activity/subscribe/",
                },
              ],
            },
            {
              label: "Operations Log",
              collapsed: true,
              items: [
                {
                  label: "Retrieve Log",
                  link: "/api/wss/operations-log/retrieve",
                },
              ],
            },
            {
              label: "Files",
              collapsed: true,
              items: [
                {
                  label: "Upload File",
                  link: "/api/wss/files/create-upload-url/",
                },
                {
                  label: "Get File URL",
                  link: "/api/wss/files/get-download-url/",
                },
              ],
            },
            {
              label: "Block Users",
              collapsed: true,
              items: [
                { label: "Block", link: "/api/wss/block-users/block/" },
                { label: "Unblock", link: "/api/wss/block-users/unblock/" },
                { label: "List", link: "/api/wss/block-users/list/" },
              ],
            },
          ],
        },
        {
          label: "HTTP API",
          collapsed: true,
          items: [
            {
              label: "Send Message",
              link: "/api/http/send-message/",
            },
            {
              label: "Send System Message",
              link: "/api/http/send-system-message/",
            },
            {
              label: "Mark Message As Read",
              link: "/api/http/mark-message-as-read/",
            },
            {
              label: "Update Message",
              link: "/api/http/update-message/",
            },
            {
              label: "Add Message Reaction",
              link: "/api/http/add-message-reaction/",
            },
            {
              label: "Get Online Users List",
              link: "/api/http/get-online-users-list/",
            },
            {
              label: "Delete Message",
              link: "/api/http/delete-message/",
            },
          ],
        },
        {
          label: "Features",
          items: [
            {
              label: "Encryption",
              link: "/",
              badge: { variant: "caution", text: { en: "Soon" } },
            },
            { label: "Customization", link: "/features/customization/" },
            {
              label: "Programmable Chat",
              link: "/features/programmable-chat",
              badge: { text: { en: "New" } },
            },
            { label: "Clustering", link: "/features/clustering/" },
            { label: "Dashboard", link: "/features/dashboard/" },
            { label: "Load Testing", link: "/features/load-tests/" },
          ],
        },
        {
          label: "GitHub",
          link: "https://github.com/SAMA-Communications/sama-server",
          attrs: {
            target: "_blank",
            style:
              "font-size: var(--sl-text-base); font-weight: 600; color: var(--sl-color-white);",
          },
        },
        {
          label: "Discrod",
          link: "https://discord.gg/ye68KMgA2f",
          attrs: {
            target: "_blank",
            style:
              "font-size: var(--sl-text-base); font-weight: 600; color: var(--sl-color-white);",
          },
        },
      ],
    }),
  ],
});
