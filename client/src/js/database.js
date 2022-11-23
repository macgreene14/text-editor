import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    // create connection to db
    const jateDB = await openDB("jate", 1);

    // create transaction, specify db and priviledge
    const tx = jateDB.transaction("jate", "readwrite");

    // open object store
    const store = tx.objectStore("jate");

    // add content to store
    const request = store.put({ id: 1, value: content });

    // get confirmation of the request
    const result = await request;

    console.lot("content saved to db, ", result);
  } catch (error) {
    () => console.error("putDb not implemented");
  }
};
// Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    // create connection to db
    const jateDB = await openDB("jate", 1);

    // create transaction, specify db and priviledge
    const tx = jateDB.transaction("jate", "readonly");

    // open object store
    const store = tx.objectStore("jate");

    // add content to store
    const request = store.getAll();

    // get confirmation of the request
    const result = await request;

    console.lot("content saved to db, ", result);
  } catch (error) {
    () => console.error("getDb not implemented");
  }
};

initdb();
