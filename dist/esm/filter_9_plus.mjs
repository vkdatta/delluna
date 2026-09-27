export const name="filter_9_plus";
export const id="dl_4df45eeddb0bfaa08211";
export const url=new URL("../icons/filter_9_plus.svg?v=682a9706f24bd2984e8d9f61b2f627008cd75ccd66b70f330579e6322c081814",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
