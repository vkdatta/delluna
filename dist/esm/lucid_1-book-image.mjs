export const name="lucid_1-book-image";
export const id="dl_4b974dd29be04f43b7aa";
export const url=new URL("../icons/lucid_1-book-image.svg?v=8351084dcd77b9eb1bc511c027f459cb6e0c42765c190b2d62101934fc3372ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
