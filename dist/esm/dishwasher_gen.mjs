export const name="dishwasher_gen";
export const id="dl_c0cacfef6c5dada19063";
export const url=new URL("../icons/dishwasher_gen.svg?v=a1b1d7b2fee6859859e428786088b819ff6e2041711708ff9a27b7f5a729cb2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
