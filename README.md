# Fortnightly News App

## Overview
This application, inspired by Google's Fortnightly design study, presents a modern news experience by showcasing a list of news articles on the front page. Users can click on any article component to navigate to a page with the full description of the article. The project is designed with a focus on simplicity and ease of use, adhering to Material Design principles.

## Features
- **News Listing**: Displays a list of articles retrieved from NewsAPI.
- **Article Detail View**: Shows full description of the article upon selection.
- **Responsive Layout**: Features a full-width image for the first article and square images for others on the front page.
- **Tailwind Compatibility**: Features integrated tailwind for rapid prototyping of UI components.
- **State management with Redux**: Employs Redux for state management.

## API
This project utilizes NewsAPI to fetch news articles.
- **Base URL**: `https://newsapi.org/`

## ENV
Create the .env file with the following:

```bash
EXPO_PUBLIC_NEWS_API_KEY=your_api_key
EXPO_PUBLIC_NEWS_API_ENDPOINT=https://newsapi.org/v2
```

## Get started

1. Install dependencies

   ```bash
   pnpm install
   ```

2. Start the app

   ```bash
    pnpm start # or pnpm dev to run in development build
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).


<p align="center">
  <img src="/assets/images/homepage.jpg" alt="Homepage View" width="45%" />
  <img src="/assets/images/article_view.jpg" alt="Article View" width="45%" />
</p>


## Get a fresh project

When you're ready, run:

```bash
pnpm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

