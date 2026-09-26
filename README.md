# BWStory React Native Test Assignment

A React Native implementation of the **Discover** and **Profile** screens based on the BWStory application UI, created as part of the **Blackcoffer React Native Developer Test Assignment**.

---

## 📱 Screens Implemented

### Discover Screen

- Dark teal header
- Search UI
- Filter button
- Social/news-style feed
- User profile avatars
- Post cover images
- Post metadata:
  - Date
  - Location
  - Views
- Like, share and comment actions
- Media-style play and volume controls
- Four static dummy posts
- Bottom navigation

### Profile Screen

- Profile header
- Back navigation
- Update Account action
- Profile cover image
- Profile image/camera action
- Name
- Gender
- Location
- Profession
- Bio section
- Bottom navigation

### Navigation

The following navigation is functional:

- Discover → Profile
- Profile → Discover

The **Location**, **Add**, and **Notifications** buttons are UI placeholders because only the Discover and Profile screens were required for the assignment.

---

## 🛠️ Tech Stack

- React Native
- Expo SDK 57
- TypeScript
- Expo Router
- NativeWind
- Tailwind CSS
- Lucide React Native

---

# 🚀 Installation & Setup

Follow the steps below to set up and run the project from a clean environment.

## 1. Prerequisites

Make sure the following are installed on your system:

- [Node.js](https://nodejs.org/) — LTS version recommended
- [Git](https://git-scm.com/)
- Expo Go on your Android device, if you want to test on a physical device

Verify Node.js and npm:

```bash
node -v
npm -v
```

Verify Git:

```bash
git --version
```

---

## 2. Clone the Repository

Open a terminal, Command Prompt, or PowerShell and clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/testApp.git
```

> Replace `YOUR_USERNAME/testApp` with the actual GitHub repository URL.

---

## 3. Navigate to the Project

Move into the project directory:

```bash
cd testApp
```

You should now be inside the project folder:

```text
testApp/
```

---

## 4. Install Dependencies

Install all project dependencies using npm:

```bash
npm install
```

This installs the packages specified in `package.json`.

---

## 5. Start the Expo Development Server

Start the development server:

```bash
npx expo start
```

Expo will start the development server and display a QR code in the terminal.

---

## 6. Run on a Physical Android Device

To run the application on a physical Android device:

1. Install **Expo Go** from the Google Play Store.
2. Connect your Android phone and computer to the same Wi-Fi network.
3. Start the Expo development server:

```bash
npx expo start
```

4. Open Expo Go on your Android device.
5. Scan the QR code displayed by Expo.
6. The application will open on your device.

---

## 7. Run on an Android Emulator

If Android Studio and an Android emulator are installed and configured:

```bash
npx expo start --android
```

Expo will launch the application on the running Android emulator.

---

# 📦 Android APK

A pre-built Android APK has been generated for the assignment and is provided separately.

### Installing the APK

If you only want to test the submitted application:

1. Download the provided `.apk` file.
2. Transfer it to an Android device if necessary.
3. Open the APK file.
4. If Android asks for permission to install applications from the source, allow it.
5. Install the application.
6. Launch the application.

No Node.js, Expo, or development environment is required to test the pre-built APK.

### Building a New APK

To create another Android APK using EAS Build:

```bash
eas login
```

Then:

```bash
eas build -p android --profile preview
```

After the build completes, EAS will provide a download link for the generated APK.

---

# 🍎 iOS

The project is built using Expo and is compatible with iOS.

An installable iOS IPA is not included with this submission because an **Apple Developer Program account** is required for the necessary iOS signing and distribution credentials.

The project can be configured and built for iOS through EAS once the required Apple Developer credentials are available.

---

# 📂 Project Structure

```text
testApp/
│
├── assets/
│   ├── profiles/
│   │   ├── pro1.jpg
│   │   ├── pro2.jpg
│   │   ├── pro3.jpg
│   │   └── pro4.jpg
│   │
│   ├── posts/
│   │   ├── post1.jpg
│   │   ├── post2.jpg
│   │   ├── post3.jpg
│   │   └── post4.jpg
│   │
│   ├── profile.jpg
│   └── profile-cover.jpg
│
├── src/
│   ├── app/
│   │   ├── _layout.tsx
│   │   ├── _index.tsx
│   │   └── _explore.tsx
│   │
│   ├── components/
│   │   ├── app-tabs.tsx
│   │   ├── animated-icon.tsx
│   │   └── storyCard.tsx
│   │
│   ├── data/
│   │   └── dummyData.ts
│   │
│   └── screens/
│       ├── discover.tsx
│       └── profile.tsx
│
├── global.css
├── app.json
├── eas.json
├── babel.config.js
├── metro.config.js
├── tailwind.config.js
├── package.json
└── package-lock.json
```

---

# 🗃️ Dummy Data

The Discover feed currently uses static local data stored in:

```text
src/data/dummyData.ts
```

Each post contains:

- User information
- Profile image
- Post image
- Date
- Location
- Views
- Likes
- Shares
- Comments
- Post title

All images used by the Discover and Profile screens are stored locally in the `assets` directory.

This allows the application UI to work without depending on external image URLs.

---

# 🎨 Styling

The project uses **NativeWind** for React Native styling.

Important configuration files:

```text
babel.config.js
metro.config.js
tailwind.config.js
global.css
```

The Tailwind configuration includes:

```text
src/app
src/components
src/screens
```

so NativeWind classes are available throughout the application.

---

# ✨ Future Improvements

The following features could be added in a production version.

### Discover

- Backend/API integration for dynamic posts
- Pagination / infinite scrolling
- Pull-to-refresh
- Functional search
- Category and location filtering
- Functional likes
- Comments
- Sharing
- Bookmark/save posts
- Real video playback

### Profile

- User authentication
- Edit profile functionality
- Profile and cover image uploads
- User-generated posts
- Form validation

### Application

- Firebase or Supabase backend
- Push notifications
- Offline data caching
- Dark mode
- Accessibility improvements
- Analytics
- Crash reporting

---

# 👨‍💻 Developer

**Sumit Rathod**

React Native / Full Stack Web Developer

---

## 📄 Assignment

This project was developed as part of the **Blackcoffer React Native Developer Test Assignment**.
