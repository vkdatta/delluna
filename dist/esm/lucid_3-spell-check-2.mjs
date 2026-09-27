export const name="lucid_3-spell-check-2";
export const id="dl_444d13ec990146298468";
export const url=new URL("../icons/lucid_3-spell-check-2.svg?v=37861fc8d6e869b2457e3beb1cb47ca8cae807d48bb713e3b0945635568213f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
