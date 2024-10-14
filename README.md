# Guess Number

## Project Title and Description
GuessNumber is a simple React Native application where users try to guess a randomly generated number. The app provides feedback on whether the guess is higher or lower, with smooth animations and responsive UI.

## Badges
![Static Badge](https://img.shields.io/badge/status-online-brightgreen)

## Quick Look
<img src="https://github.com/user-attachments/assets/57074537-7fc9-444f-aa94-81d1eea5a6c6" width="250" alt="Guess My Number App Demo">

## Table of Content
- [Project Title and Description](#project-title-and-description)
- [Features](#features)
- [Installation (for Development)](#installation-for-development)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Demo (for End Users)](#demo-for-end-users)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Third-Party Libraries](#third-party-libraries)
- [License](#license)

## Features
- Random number generator and guessing game.
- Responsive UI and dynamic layout based on screen size.
- Smooth transitions and animations throughout the app.
- Android support with enhanced performance.

## Installation (for Development)

> **Note:** This section is intended for developers who want to run the app locally on their development environment (e.g., Visual Studio Code).

### Prerequisites
- **Node.js**: v18.x or higher
- **npm**: v8.x or higher
- **Expo CLI**: v6.x

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/petrmichal0/guess-number.git
    ```

2. Navigate to the project directory:
    ```bash
    cd guess-number
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

### 1. Starting the Development Server
To start the development server, run:
```bash
npm start
```

### 2. Running the App on a Device

To run the app on a simulator or physical device:

- For Android:
    ```bash
    npm run android
    ```

## Screenshots

<table>
  <tr>
    <th>Start Screen</th>
    <th>Game Screen</th>
    <th>Game Over Screen</th>
  </tr>
  <tr>
    <td style="border: 1px solid black;">
      <a href="https://github.com/user-attachments/assets/12dd04c5-3d7a-41f0-ab3a-a77cdb87377a" target="_blank">
        <img src="https://github.com/user-attachments/assets/12dd04c5-3d7a-41f0-ab3a-a77cdb87377a" width="130" height="300" alt="Start Screen">
      </a>
    </td>
    <td style="border: 1px solid black;">
      <a href="https://github.com/user-attachments/assets/2a79b817-09f5-41a0-867d-3c26a611d04d" target="_blank">
        <img src="https://github.com/user-attachments/assets/2a79b817-09f5-41a0-867d-3c26a611d04d" width="130" height="300" alt="Game Screen">
      </a>
    </td>
    <td style="border: 1px solid black;">
      <a href="https://github.com/user-attachments/assets/2a2a9d33-33ac-4a31-8ec6-2170fd84df98" target="_blank">
        <img src="https://github.com/user-attachments/assets/2a2a9d33-33ac-4a31-8ec6-2170fd84df98" width="130" height="300" alt="Game Over Screen">
      </a>
    </td>
  </tr>
</table>

## Demo (for End Users)

### 1. Try the App with Expo Go

The easiest way to try the app is by using **Expo Go**. Simply download the [Expo Go](https://expo.dev/client) app on your mobile device and scan the QR code below to launch the app:

<img src="https://github.com/user-attachments/assets/7ce6f21b-e2e1-404d-886e-81f0b321a54c" alt="QR Code for Expo" width="200">

Alternatively, you can open the app directly in Snack using this link: [Open in Snack](https://snack.expo.dev/@petrmichal0/guess-my-number?platform=android).

### 2. Download the App Directly

You can also download the app's installation file directly to your device:

- [Download APK for Android](link-to-apk)

## Project Structure

```css
Guess My Number/
├── assets/
│   ├── adaptive-icon.png
│   ├── icon.png
│   ├── splash.png
├── components/
│   ├── GuessLogItem.js
│   ├── NumberContainer.js
├── constants/
│   ├── colors.js
├── screens/
│   ├── GameOverScreen.js
│   ├── GameScreen.js
│   ├── StartGameScreen.js
├── ui/
│   ├── Card.js
│   ├── InstructionText.js
│   ├── PrimaryButton.js
│   ├── Title.js
├── App.js
├── app.json
├── babel.config.js
├── package-lock.json
├── package.json
├── .gitignore
```

## Technologies Used

[![React Native Badge](https://img.shields.io/badge/-React_Native-61DAFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DAFB)](#) 
[![Expo Badge](https://img.shields.io/badge/-Expo-000020?style=for-the-badge&labelColor=black&logo=expo&logoColor=white)](#)

## Third-party Libraries:
1. **expo-app-loading**: Helps with displaying the splash screen and loading fonts or other assets when the app starts.
2. **expo-font**: Used for loading custom fonts in your application.
3. **expo-linear-gradient**: Enables the use of linear gradients in the app's UI.
4. **expo-splash-screen**: Manages the splash screen during the app startup process.
5. **expo-status-bar**: Provides control over the status bar on mobile devices.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
