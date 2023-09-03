import algoliasearch from "algoliasearch/lite";

const client = algoliasearch("VKV7DYQOI0", "bced717813b1154685253e4046d28d9f");
const index = client.initIndex("my_first_index");

export { index };
