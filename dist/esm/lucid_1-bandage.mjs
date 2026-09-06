export const name="lucid_1-bandage";
export const id="dl_225203fad7374780bbbc";
export const url=new URL("../icons/lucid_1-bandage.svg?v=bda42e5f0ca321b8991037703b77d546a4471a4f6a12365f11bac9ab4975fb55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
