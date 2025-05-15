# Nextjs Boilerplate

This project provides a basic template for new Next.js projects that can be deployed under a non-root path. It also provides some wrappers for MUI components.

Please ensure a `.env` file exists, as this is important for the base path configuration.

## Features

### Base Path Configuration

The Next.js base path is automatically configured for this project in the `next.config.ts` file. The only prerequisite you need to complete before it is fully functional is to setup the `NEXT_PUBLIC_BASE_PATH` variable in the environent file. This variable will be exposed to the client for convienence, and should only be set to the base path the app is deployed under.