# Nextjs Boilerplate

This project provides a basic template for new Next.js projects that can be deployed under a non-root path. It also provides some wrappers for MUI components.

Please ensure a `.env` file exists, as this is important for the base path configuration.

## Features

### Folder Structure

This app provides a basic folder structure for a Next api, components, contexts, and logic.

### Base Path Configuration

The Next.js base path is automatically configured for this project in the `next.config.ts` file. The only prerequisite you need to complete before it is fully functional is to setup the `NEXT_PUBLIC_BASE_PATH` variable in the environent file. This variable will be exposed to the client for convienence, and should only be set to the base path the app is deployed under.

### Generic Components

#### Table

This generic table component uses the `TableDataType` for all data. It will automatically generate headings when provided a list of rows, and should be used as a starting point for a more advanced table.

- The `TableDataType` can be found in `src/lib/types/table.ts`
- The individual tables can be found in `src/components/table`.
    - You should only need to use the `Table` component from `table.ts`

#### DropdownSI

This component provides a MUI dropdown that only allows for a single input. It needs to be provided with a string array of options, a label, and a callback function. When the selected value is changed, the callback function is called with a string-representation of the value.