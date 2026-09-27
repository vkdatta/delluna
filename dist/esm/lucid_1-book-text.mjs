export const name="lucid_1-book-text";
export const id="dl_638701c14ca6425e9f30";
export const url=new URL("../icons/lucid_1-book-text.svg?v=653accdeb08b8ce3d59f8487d4a8c73fdff4b887348bce48f4576639676360bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
