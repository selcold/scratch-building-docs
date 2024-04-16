---
sidebar_position: 1
---

# Adding New Mods

Here are the steps to add a new MOD to this repository.

:::info

Mods that are not currently available on Scratch cannot be registered!
Please wait as it will most likely become available in the future.

:::

## Files

To add a new mod, please add information to [this file](https://github.com/selcold/scratch-building/blob/main/contents/mods.ts).

## Information to Add

Add information for the new MOD to the `contentObj_modsAll` object in the `mods.ts` file.

### Properties

1. **version:** Specify the version number of the MOD.
2. **project_type:** Specify the type of the project. Example: "SBMOD", "SBAPI", "SBAddons", "SBaddonAPI".
3. **project_id:** Specify the ID of the project.
4. **creator:** Specify the creator of the MOD.
5. **title:** Specify the title of the MOD.
6. **title_en:** Specify the English title of the MOD (optional).
7. **description:** Specify the description of the MOD.
8. **description_en:** Specify the English description of the MOD (optional).
9. **tags:** Specify tags related to the MOD. Each tag has a label and a color.

### Example Addition

```typescript
{
    "version": 7,
    "project_type": "SBMOD",
    "project_id": YOUR_PROJECT_ID,
    "creator": "YOUR_NAME",
    "title": "YOUR_MOD_TITLE",
    "title_en": "YOUR_MOD_EN_TITLE", // Optional
    "description": "YOUR_MOD_DESCRIPTION",
    "description_en": "YOUR_MOD_EN_DESCRIPTION", // Optional
    "tags": [
        {
            "label": "YOUR_TAG_LABEL",
            "color": "YOUR_TAG_COLOR"
        },
        // Add additional tags here if needed
    ]
}
```

:::note

- Choose the color for the tags from the following values: "dark", "blue", "red", "green", "yellow", "indigo", "purple", "pink", "" (empty string).
- Don't forget to create a pull request after making changes to the file.

:::