export const name="lucid_1-book-up-2";
export const id="dl_9c4f1034d4d94b50b32c";
export const url=new URL("../icons/lucid_1-book-up-2.svg?v=578d601e762c9f7e3e8c1dd2534835b4d8d4ded687cd0837986225434814e70a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
