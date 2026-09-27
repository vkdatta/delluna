export const name="lucid_1-banana";
export const id="dl_f222c1590462433ea979";
export const url=new URL("../icons/lucid_1-banana.svg?v=4ce5f71dfcb80cf9364b43b4e0ae8b50186d82a9ea1de842168025487350d9ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
