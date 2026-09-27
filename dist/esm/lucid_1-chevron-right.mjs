export const name="lucid_1-chevron-right";
export const id="dl_9f04f58bc8334bcdb5ac";
export const url=new URL("../icons/lucid_1-chevron-right.svg?v=bea03bc32c2b3a67793f3ee8deba1a8b5790751abc82b3651832703da7627c05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
