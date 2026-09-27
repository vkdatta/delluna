export const name="lucid_3-spell-check-2";
export const id="dl_444d13ec990146298468";
export const url=new URL("../icons/lucid_3-spell-check-2.svg?v=08b7bbfce9ece338de329a77a84eebf72ec8413158cd1505f54a2c3cf1aaeab3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
