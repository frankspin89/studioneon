import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

const social = {
  label: "Social media",
  name: "social",
  type: "object",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
  ],
};

const menu = {
  label: "Menu informatie",
  name: "menu",
  type: "object",
  fields: [
    {
      label: "main",
      name: "main",
      type: "object",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "number",
          name: "weight",
          label: "Weight",
        },
      ],
    },
  ],
};

const meta = {
  label: "Meta informatie",
  name: "meta",
  type: "object",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
  ],
};

export default defineConfig({
  branch,
  clientId: "4f939f4e-68da-40a6-8121-72ef1c268abd", // Get this from tina.io
  token: "e9f2c91b8d16f756e8ff8a895dad50b4dedc2e72", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        label: "Homepage",
        name: "homepage",
        path: "content",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            label: "Content",
            name: "body",
            isBody: true,
          },
          meta,
          social,
        ],
      },
      {
        name: "werk",
        label: "Werk",
        path: "content/werk",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "hero",
            label: "Hero afbeelding",
          },
          {
            type: "datetime",
            name: "date",
            label: "Datum",
          },
          {
            type: "string",
            name: "klant",
            label: "Klant",
          },
          {
            type: "number",
            name: "weight",
            label: "Weight",
          },

          {
            label: "Tags",
            name: "tags",
            type: "string",
            list: true,
          },
          {
            type: "rich-text",
            label: "Content",
            name: "body",
            isBody: true,
          },
          {
            type: "object",
            label: "Work",
            name: "work",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: `${item?.name}   ` };
              },
            },
            fields: [
              {
                type: "string",
                name: "name",
                label: "Naam",
              },
              {
                type: "image",
                name: "images",
                label: "Afbeeldingen",
                list: true,
                ui: {
                  max: 2,
                },
              },
            ],
          },
          meta,
          social,
        ],
      },
      {
        label: "Over ons",
        name: "overons",
        path: "content",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "overons*",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Type",
            required: true,
          },
          {
            type: "string",
            name: "background",
            label: "Background",
            required: true,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
          },
          {
            type: "image",
            name: "hero",
            label: "Hero afbeelding",
          },
          {
            type: "rich-text",
            label: "Content",
            name: "body",
            isBody: true,
          },
          {
            type: "image",
            name: "images_top",
            label: "Afbeeldingen",
            list: true,
            ui: {
              max: 2,
            },
          },
          {
            type: "object",
            name: "content_blokken",
            label: "Content blokken",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: `${item?.title}   ` };
              },
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "content",
                label: "Content",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "list",
                label: "List",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: `${item?.title}   ` };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "string",
                    name: "content",
                    label: "Content",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
            ],
          },
          {
            type: "image",
            name: "image_bottom",
            label: "Afbeelding onderzijde pagina",
          },
          meta,
          social,
          menu,
        ],
      },

      {
        label: "Contact",
        name: "contact",
        path: "content",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "contact*",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Type",
            required: true,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
          },
          {
            type: "string",
            name: "contact_informatie",
            label: "Contact informatie",
            required: true,
          },
          {
            type: "string",
            name: "adres_1",
            label: "Adres 1",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "adres_kaarten",
            label: "Adres kaarten",
            list: true,
            fields: [
              {
                type: "string",
                name: "naam",
                label: "Naam",
                required: true,
              },
              {
                type: "string",
                name: "google_maps_link",
                label: "Google maps link",
              },
              {
                type: "image",
                name: "afbeelding",
                label: "Afbeelding",
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          meta,
          social,
          menu,
        ],
      },
      {
        label: "Legal",
        name: "legal",
        path: "content",
        format: "md",

        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "legal",
        },
        fields: [
          {
            type: "string",
            name: "type",
            label: "Type",
            required: true,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          meta,
          social,
        ],
      },
    ],
  },
});
