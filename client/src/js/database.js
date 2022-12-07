// This statement imports openDB from IndexedDB

import { openDB } from "idb";

// Initializes the database with an object store utilizing id as a keypath if it does not exist.
// Otherwise this function returns and does nothing as the database has already been initialized.

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", {
        keyPath: "id",
        autoIncrement: true,
      });
      console.log("jate database created");
    },
  });

// The putDb function will update the object store with any additional content

export const putDb = async (content) => {
  console.log("Post to the database");

  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readwrite");

  const store = tx.objectStore("jate");
  const request = store.put({
    content,
  });

  const result = await request;
  return result;
};

// The getDb function uses the objectStores get() method, retrieving the latest content.

export const getDb = async () => {
  console.log("GET from the database");

  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readonly");

  const store = tx.objectStore("jate");
  const request = store.getAll();

  const result = await request;
  const lastEntry = store.get(result.length);
  return lastEntry;
};

// This call to initdb() is what "initializes" the database

initdb();
