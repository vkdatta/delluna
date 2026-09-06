export const name="lucid_2-fish-symbol";
export const id="dl_fe0b1ea082ee4fe99cbc";
export const url=new URL("../icons/lucid_2-fish-symbol.svg?v=922f13c05a5ee8201ecb4a07b9c151e9acd86780b68d6d8f68741ea6603891f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
