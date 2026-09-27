export const name="lucid_1-broccoli";
export const id="dl_22bbf55496c4491d8be8";
export const url=new URL("../icons/lucid_1-broccoli.svg?v=21d96db5bfd438b580b3e194983457a028bdf1242f106bda6bb0c9eae9a6770d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
