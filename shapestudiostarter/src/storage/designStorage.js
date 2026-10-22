// TODO (Task 3): Save designs on the device with AsyncStorage.
//
// 1. Install it:  npx expo install @react-native-async-storage/async-storage
// 2. Import it:   import AsyncStorage from '@react-native-async-storage/async-storage';
// 3. Store ALL designs as one JSON array under a single key, e.g. '@shape-studio/designs'.
//    AsyncStorage only stores strings, so use JSON.stringify / JSON.parse.
//
// A design looks like:
// { id, createdAt, canvas: { width, height }, shapes: [{ id, type, x, y }] }

const STORAGE_KEY = '@shape-studio/designs';

// Return every saved design (newest first), or [] if nothing is saved yet.
export async function getDesigns() {
  // TODO
  return [];
}

// Add one design to the saved list.
export async function saveDesign(design) {
  // TODO
}

// Return the design with this id, or null if it does not exist.
export async function getDesignById(id) {
  // TODO
  return null;
}

// Remove the design with this id.
export async function deleteDesign(id) {
  // TODO
}
