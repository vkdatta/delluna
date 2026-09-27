export const name="lucid_1-book-up-2";
export const id="dl_9c4f1034d4d94b50b32c";
export const url=new URL("../icons/lucid_1-book-up-2.svg?v=cc86f651c73dc1ee1973705c97bbb7b8ce3aa6a3206fb6ad5362f2f5ed0dd9a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
