export const name="lucid_2-folder-minus";
export const id="dl_7aea585323ad4368bd5b";
export const url=new URL("../icons/lucid_2-folder-minus.svg?v=6261c6afca24695ee5b15d4f9a68fbb843dd17b5d5c2be35970ad724096a39b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
